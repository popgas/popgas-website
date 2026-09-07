import { chmod, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawn } from 'node:child_process';
import { afterEach, describe, expect, it } from 'vitest';

const temporaryDirectories: string[] = [];
const acceptance = resolve(process.cwd(), 'tests/e2e-image-acceptance.sh');

afterEach(async () => {
  await Promise.all(temporaryDirectories.splice(0).map(directory =>
    rm(directory, { force: true, recursive: true }),
  ));
});

describe('website image acceptance lifecycle', () => {
  it.each(['abrupt-child-exit', 'sigint', 'sigterm'] as const)(
    'removes partially created exact-owned migration resources after %s and preserves foreign sentinels',
    async mode => {
      const fixture = await lifecycleFixture(mode);
      const child = spawn('sh', [acceptance], {
        cwd: process.cwd(),
        env: fixture.environment,
        stdio: ['ignore', 'pipe', 'pipe'],
      });

      if (mode === 'sigint' || mode === 'sigterm') {
        await waitForOutput(child.stdout, 'fake-migration-ready');
        child.kill(mode === 'sigint' ? 'SIGINT' : 'SIGTERM');
      }

      const result = await completion(child);
      expect(result.code).toBe({ 'abrupt-child-exit': 97, sigint: 130, sigterm: 143 }[mode]);
      expect(await resourceNames(fixture.state)).toEqual([
        'container.foreign-sentinel',
        'network.foreign-sentinel',
      ]);

      const log = await readFile(fixture.log, 'utf8');
      expect(log).toContain('migration-environment=present');
      expect(log).not.toContain('rm --force foreign-sentinel');
      expect(log).not.toContain('network rm foreign-sentinel');
    },
    15_000,
  );

  it('refuses a pre-existing migration collision without deleting the foreign resource', async () => {
    const fixture = await lifecycleFixture('collision');
    const result = await completion(spawn('sh', [acceptance], {
      cwd: process.cwd(),
      env: fixture.environment,
      stdio: ['ignore', 'pipe', 'pipe'],
    }));

    expect(result.code).not.toBe(0);
    expect(result.stderr).toContain('website acceptance resource name already exists');
    const resources = await resourceNames(fixture.state);
    expect(resources).toContain('container.foreign-sentinel');
    expect(resources).toContain('network.foreign-sentinel');
    const collidingDatabase = resources.find(name => name.startsWith('container.popgas-website-postgres-'));
    expect(collidingDatabase).toBeDefined();
    expect(await readFile(join(fixture.state, collidingDatabase!), 'utf8')).toBe('foreign-owner');
  });
});

async function lifecycleFixture(mode: 'abrupt-child-exit' | 'collision' | 'sigint' | 'sigterm') {
  const root = await mkdtemp(join(tmpdir(), 'website-lifecycle-'));
  temporaryDirectories.push(root);
  const bin = join(root, 'bin');
  const state = join(root, 'state');
  const log = join(root, 'docker.log');
  await Promise.all([mkdir(bin), mkdir(state)]);
  await Promise.all([
    writeFile(join(state, 'container.foreign-sentinel'), 'foreign-owner'),
    writeFile(join(state, 'network.foreign-sentinel'), 'foreign-owner'),
    writeExecutable(join(bin, 'git'), '#!/bin/sh\nprintf "%s\\n" 0123456789abcdef0123456789abcdef01234567\n'),
    writeExecutable(join(bin, 'df'), '#!/bin/sh\nprintf "Filesystem 1024-blocks Used Available Capacity Mounted on\\nfixture 9999999 1 9999998 1%% /fixture\\n"'),
    writeExecutable(join(bin, 'docker'), fakeDocker()),
    writeExecutable(join(bin, 'npx'), fakeNpx()),
  ]);

  return {
    environment: {
      ...process.env,
      PATH: `${bin}:${process.env.PATH ?? ''}`,
      FAKE_DOCKER_LOG: log,
      FAKE_DOCKER_STATE: state,
      FAKE_LIFECYCLE_MODE: mode,
    },
    log,
    state,
  };
}

async function writeExecutable(path: string, contents: string): Promise<void> {
  await writeFile(path, contents);
  await chmod(path, 0o755);
}

function fakeDocker(): string {
  return `#!/bin/sh
set -eu
printf '%s\\n' "$*" >> "$FAKE_DOCKER_LOG"
kind="$1"
operation="$2"
shift 2

resource_name() {
  last=''
  for argument in "$@"; do last="$argument"; done
  printf '%s' "$last"
}

resource_file() {
  safe_name="$(printf '%s' "$2" | tr '/:' '__')"
  printf '%s/%s.%s' "$FAKE_DOCKER_STATE" "$1" "$safe_name"
}

case "$kind:$operation" in
  container:inspect|network:inspect|image:inspect)
    name="$(resource_name "$@")"
    file="$(resource_file "$kind" "$name")"
    if [ "$FAKE_LIFECYCLE_MODE" = collision ] && [ "$kind" = container ] && echo "$name" | grep -q '^popgas-website-postgres-'; then
      printf '%s' foreign-owner > "$file"
      printf '%s\\n' foreign-owner
      exit 0
    fi
    [ -f "$file" ] || exit 1
    if [ "\${1:-}" = -f ] || [ "\${1:-}" = --format ]; then cat "$file"; fi
    ;;
  container:rm)
    name="$(resource_name "$@")"
    rm -f "$(resource_file container "$name")"
    ;;
  network:rm)
    name="$(resource_name "$@")"
    rm -f "$(resource_file network "$name")"
    ;;
  image:rm)
    name="$(resource_name "$@")"
    rm -f "$(resource_file image "$name")"
    ;;
  network:create)
    owner=''
    name="$(resource_name "$@")"
    while [ "$#" -gt 0 ]; do
      if [ "$1" = --label ]; then owner="\${2#com.popgas.e2e.owner=}"; shift 2; else shift; fi
    done
    printf '%s' "$owner" > "$(resource_file network "$name")"
    ;;
  build:*)
    set -- "$operation" "$@"
    owner=''
    name=''
    while [ "$#" -gt 0 ]; do
      case "$1" in
        --label) owner="\${2#com.popgas.e2e.owner=}"; shift 2 ;;
        --tag) name="$2"; shift 2 ;;
        *) shift ;;
      esac
    done
    printf '%s' "$owner" > "$(resource_file image "$name")"
    ;;
  run:*)
    set -- "$operation" "$@"
    owner=''
    name=''
    while [ "$#" -gt 0 ]; do
      case "$1" in
        --label) owner="\${2#com.popgas.e2e.owner=}"; shift 2 ;;
        --name) name="$2"; shift 2 ;;
        *) shift ;;
      esac
    done
    [ -z "$name" ] || printf '%s' "$owner" > "$(resource_file container "$name")"
    ;;
  *) exit 0 ;;
esac
`;
}

function fakeNpx(): string {
  return `#!/bin/sh
set -eu
: "\${POPGAS_WEBSITE_MIGRATION_OWNER:?}"
: "\${POPGAS_WEBSITE_MIGRATION_NETWORK:?}"
: "\${POPGAS_WEBSITE_MIGRATION_DATABASE:?}"
printf '%s\\n' migration-environment=present >> "$FAKE_DOCKER_LOG"
docker network create --label "com.popgas.e2e.owner=$POPGAS_WEBSITE_MIGRATION_OWNER" "$POPGAS_WEBSITE_MIGRATION_NETWORK"
docker run --detach --name "$POPGAS_WEBSITE_MIGRATION_DATABASE" --label "com.popgas.e2e.owner=$POPGAS_WEBSITE_MIGRATION_OWNER" fixture-postgres
printf '%s\\n' fake-migration-ready
if [ "$FAKE_LIFECYCLE_MODE" = sigint ] || [ "$FAKE_LIFECYCLE_MODE" = sigterm ]; then
  while :; do sleep 1; done
fi
exit 97
`;
}

async function resourceNames(state: string): Promise<string[]> {
  return (await readdir(state)).sort();
}

function waitForOutput(stream: NodeJS.ReadableStream, expected: string): Promise<void> {
  return new Promise((accept, reject) => {
    let output = '';
    const deadline = setTimeout(() => reject(new Error(`timed out waiting for ${expected}`)), 5_000);
    stream.on('data', chunk => {
      output += String(chunk);
      if (output.includes(expected)) {
        clearTimeout(deadline);
        accept();
      }
    });
    stream.on('error', reject);
  });
}

function completion(child: ReturnType<typeof spawn>): Promise<{ code: number | null; stderr: string }> {
  return new Promise((accept, reject) => {
    let stderr = '';
    child.stderr?.on('data', chunk => { stderr += String(chunk); });
    child.once('error', reject);
    child.once('close', code => accept({ code, stderr }));
  });
}
