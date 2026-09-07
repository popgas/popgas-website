import { execFileSync } from 'node:child_process';

import { afterAll, expect, test } from 'vitest';

const suffix = `${process.pid}`;
const image = process.env.POPGAS_WEBSITE_CONTRACT_IMAGE ?? '';
const imageTest = image ? test : test.skip;
const network = `popgas-website-migration-${suffix}`;
const database = `popgas-website-postgres-${suffix}`;
const owner = `popgas-website-migration-contract-${suffix}`;
const databaseUrl = `postgresql://popgas_e2e:popgas_e2e@${database}:5432/popgas_e2e?schema=public`;
let claimedNetwork = false;
let claimedDatabase = false;

function removeDockerResource(args: string[]) {
  try {
    execFileSync('docker', args, { stdio: 'ignore' });
  } catch {
    // A failed setup can leave only a subset of the scoped test resources.
  }
}

function dockerLabel(args: string[]): string {
  try {
    return execFileSync('docker', args, { encoding: 'utf8' }).trim();
  } catch {
    return '';
  }
}

function dockerResourceExists(args: string[]): boolean {
  try {
    execFileSync('docker', args, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function waitForHealthyDatabase() {
  const deadline = Date.now() + 60_000;

  while (Date.now() < deadline) {
    const status = execFileSync('docker', [
      'inspect',
      '--format',
      '{{.State.Health.Status}}',
      database,
    ], { encoding: 'utf8' }).trim();

    if (status === 'healthy') return;
    if (status === 'unhealthy') throw new Error('PostgreSQL became unhealthy');

    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 250);
  }

  throw new Error('PostgreSQL did not become healthy within 60 seconds');
}

function migrate() {
  execFileSync('docker', [
    'run',
    '--rm',
    '--network', network,
    '--env', `DATABASE_URL=${databaseUrl}`,
    image,
    'npx', '--offline', 'prisma', 'migrate', 'deploy',
    '--schema', 'prisma/e2e/schema.prisma',
  ], { stdio: 'pipe' });
}

afterAll(() => {
  if (claimedDatabase) {
    const actualOwner = dockerLabel([
      'container', 'inspect', '--format', '{{index .Config.Labels "com.popgas.e2e.owner"}}', database,
    ]);
    if (actualOwner === owner) removeDockerResource(['container', 'rm', '--force', database]);
  }
  if (claimedNetwork) {
    const actualOwner = dockerLabel([
      'network', 'inspect', '--format', '{{index .Labels "com.popgas.e2e.owner"}}', network,
    ]);
    if (actualOwner === owner) removeDockerResource(['network', 'rm', network]);
  }
});

imageTest('applies the isolated E2E migration offline twice to a fresh PostgreSQL database', () => {
  if (
    dockerResourceExists(['container', 'inspect', database])
    || dockerResourceExists(['network', 'inspect', network])
  ) {
    throw new Error('migration contract resource name already exists');
  }
  claimedNetwork = true;
  execFileSync('docker', ['network', 'create', '--label', `com.popgas.e2e.owner=${owner}`, network], { stdio: 'pipe' });
  claimedDatabase = true;
  execFileSync('docker', [
    'run',
    '--detach',
    '--name', database,
    '--label', `com.popgas.e2e.owner=${owner}`,
    '--network', network,
    '--env', 'POSTGRES_DB=popgas_e2e',
    '--env', 'POSTGRES_USER=popgas_e2e',
    '--env', 'POSTGRES_PASSWORD=popgas_e2e',
    '--health-cmd', 'pg_isready --username popgas_e2e --dbname popgas_e2e',
    '--health-interval', '1s',
    '--health-timeout', '3s',
    '--health-retries', '30',
    'postgres:16-bookworm',
  ], { stdio: 'pipe' });

  waitForHealthyDatabase();

  const applicationRuntime = JSON.parse(execFileSync('docker', [
    'run',
    '--rm',
    image,
    'node',
    '-e',
    `const fs = require('node:fs');
const manifest = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const version = (name) => JSON.parse(fs.readFileSync(\`node_modules/\${name}/package.json\`, 'utf8')).version;
console.log(JSON.stringify({
  packageName: manifest.name,
  react: version('react'),
  reactDom: version('react-dom'),
  prismaInApplicationRuntime: fs.existsSync('node_modules/prisma'),
}));`,
  ], { encoding: 'utf8' }));

  expect(applicationRuntime).toEqual({
    packageName: 'popgas-site',
    react: '19.2.3',
    reactDom: '19.2.3',
    prismaInApplicationRuntime: false,
  });

  migrate();
  migrate();

  const rowCount = execFileSync('docker', [
    'exec',
    database,
    'psql',
    '--username', 'popgas_e2e',
    '--dbname', 'popgas_e2e',
    '--tuples-only',
    '--no-align',
    '--command', 'SELECT COUNT(*) FROM "BlogPost";',
  ], { encoding: 'utf8' }).trim();

  expect(rowCount).toBe('0');
}, 300_000);
