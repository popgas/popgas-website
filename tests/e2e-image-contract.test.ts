import { execFileSync } from 'node:child_process';

import { expect, test } from 'vitest';

const image = process.env.POPGAS_WEBSITE_CONTRACT_IMAGE ?? '';
const revision = process.env.POPGAS_WEBSITE_CONTRACT_REVISION ?? '';
const imageTest = image && revision ? test : test.skip;

imageTest('publishes OCI traceability and an HTTP healthcheck in the supplied E2E image', () => {
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
