import { execFileSync } from 'node:child_process';

import { afterAll, expect, test } from 'vitest';

const suffix = `${process.pid}`;
const image = `popgas/e2e-website:migration-contract-${suffix}`;
const network = `popgas-website-migration-${suffix}`;
const database = `popgas-website-postgres-${suffix}`;
const databaseUrl = `postgresql://popgas_e2e:popgas_e2e@${database}:5432/popgas_e2e?schema=public`;

function removeDockerResource(args: string[]) {
  try {
    execFileSync('docker', args, { stdio: 'ignore' });
  } catch {
    // A failed setup can leave only a subset of the scoped test resources.
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
  removeDockerResource(['container', 'rm', '--force', database]);
  removeDockerResource(['network', 'rm', network]);
  removeDockerResource(['image', 'rm', '--force', image]);
});

test('applies the isolated E2E migration offline twice to a fresh PostgreSQL database', () => {
  execFileSync('docker', ['network', 'create', network], { stdio: 'pipe' });
  execFileSync('docker', [
    'run',
    '--detach',
    '--name', database,
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

  execFileSync('docker', [
    'build',
    '--build-arg', 'NEXT_PUBLIC_ERP_URL=http://website-e2e:3000',
    '--tag', image,
    '-f', 'e2e.Dockerfile',
    '.',
  ], { stdio: 'pipe' });

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
