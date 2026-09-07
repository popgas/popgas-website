import { execFileSync } from 'node:child_process';

import { afterAll, expect, test } from 'vitest';

const image = `popgas/e2e-website:image-contract-${process.pid}`;
const revision = 'website-image-contract-revision';

afterAll(() => {
  try {
    execFileSync('docker', ['image', 'rm', '--force', image], { stdio: 'ignore' });
  } catch {
    // The build can fail before Docker creates the contract-test image.
  }
});

test('publishes OCI traceability and an HTTP healthcheck in the E2E image', () => {
  execFileSync('docker', [
    'build',
    '--build-arg', 'NEXT_PUBLIC_ERP_URL=http://website-e2e:3000',
    '--build-arg', `VCS_REF=${revision}`,
    '--tag', image,
    '-f', 'e2e.Dockerfile',
    '.',
  ], { stdio: 'pipe' });

  const metadata = JSON.parse(execFileSync('docker', [
    'image', 'inspect', image,
  ], { encoding: 'utf8' }))[0];

  expect(metadata.Config.Labels).toMatchObject({
    'org.opencontainers.image.source': 'https://github.com/popgas/popgas-website',
    'org.opencontainers.image.revision': revision,
  });
  expect(metadata.Config.Healthcheck?.Test).toEqual([
    'CMD',
    'node',
    '-e',
    "const http = require('node:http'); const request = http.get('http://127.0.0.1:3000/', (response) => { response.resume(); process.exit(response.statusCode >= 200 && response.statusCode < 300 ? 0 : 1); }); request.on('error', () => process.exit(1));",
  ]);
}, 300_000);
