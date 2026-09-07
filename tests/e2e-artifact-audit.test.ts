import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { auditBrowserArtifact } from './helpers/e2e-artifact-audit.mjs';

const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(temporaryDirectories.splice(0).map(directory =>
    rm(directory, { force: true, recursive: true }),
  ));
});

async function artifact(files: Record<string, string>): Promise<string> {
  const directory = await mkdtemp(join(tmpdir(), 'popgas-website-audit-'));
  temporaryDirectories.push(directory);
  await Promise.all(Object.entries(files).map(([name, contents]) =>
    writeFile(join(directory, name), contents),
  ));
  return directory;
}

describe('E2E browser artifact audit', () => {
  it('allows inert SEO URLs and user-initiated external anchors', async () => {
    const directory = await artifact({
      'index.html': '<link rel="canonical" href="https://popgas.com.br/"><script type="application/ld+json">{"url":"https://schema.org"}</script><a href="https://status.popgas.com.br">Status</a>',
      'app.css': '.logo { background: url(data:image/svg+xml,test) }',
    });

    expect(await auditBrowserArtifact(directory)).toEqual({ files: 2, violations: [] });
  });

  it('rejects active external HTML and CSS resources by sanitized origin', async () => {
    const directory = await artifact({
      'index.html': '<script src="https://assets.invalid/app.js"></script><img src="//images.invalid/logo.png">',
      'app.css': '@import "https://styles.invalid/app.css"; .x { background: url(https://images.invalid/x.png) }',
    });

    const result = await auditBrowserArtifact(directory);
    expect(result.violations).toEqual(expect.arrayContaining([
      'active external resource: https://assets.invalid',
      'active external resource: http://images.invalid',
      'active external resource: https://styles.invalid',
      'active external resource: https://images.invalid',
    ]));
  });

  it('rejects exact production service origins and credential shapes without values', async () => {
    const directory = await artifact({
      'app.js': 'const endpoint="https://api.popgas.com.br/v1"; const key="AIza123456789012345678901234567890";',
    });

    const result = await auditBrowserArtifact(directory);
    expect(result.violations).toEqual([
      'credential shape: google-api-key',
      'production service origin: https://api.popgas.com.br',
    ]);
    expect(JSON.stringify(result)).not.toContain('AIza123456789012345678901234567890');
  });
});
