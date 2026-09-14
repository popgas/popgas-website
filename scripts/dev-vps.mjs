import { resolve } from 'node:path';

process.loadEnvFile(resolve(import.meta.dirname, '..', '.env.vps'));
process.argv = [
  process.execPath,
  'next',
  'dev',
  '--hostname',
  '0.0.0.0',
  '--port',
  '3000',
];

await import('next/dist/bin/next');
