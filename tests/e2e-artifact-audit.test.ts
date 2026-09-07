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

  it('canonicalizes production origins without treating attacker-controlled subdomains as production', async () => {
    const exactDirectory = await artifact({
      'exact.js': 'const exact = "HTTPS://API.POPGAS.COM.BR/v1";',
    });
    expect(await auditBrowserArtifact(exactDirectory)).toEqual({
      files: 1,
      violations: ['production service origin: https://api.popgas.com.br'],
    });

    const controlDirectory = await artifact({
      'control.js': 'const evil = "https://api.popgas.com.br.evil.invalid/v1"; const malformed = "https://%";',
    });
    expect(await auditBrowserArtifact(controlDirectory)).toEqual({ files: 1, violations: [] });
  });

  it('parses quoted tag delimiters and keeps the browser first duplicate attribute', async () => {
    const directory = await artifact({
      'index.html': [
        '<img title=">" src="https://quoted.invalid/pixel">',
        '<img src="https://first.invalid/pixel" src="/local.png">',
        '<img src="/local.png" src="https://ignored-duplicate.invalid/pixel">',
      ].join('\n'),
    });

    expect((await auditBrowserArtifact(directory)).violations).toEqual([
      'active external resource: https://first.invalid',
      'active external resource: https://quoted.invalid',
    ]);
  });

  it('keeps script raw text inert until a real delimited closing tag', async () => {
    const directory = await artifact({
      'index.html': [
        '<script>',
        "const documented = '</ScRiPtUrE><img src=https://raw-prefix.invalid/pixel>';",
        '</SCRIPT>',
        '<img src="https://after-close.invalid/pixel">',
      ].join('\n'),
    });

    expect((await auditBrowserArtifact(directory)).violations).toEqual([
      'active external resource: https://after-close.invalid',
    ]);
  });

  it('blocks active icon, SVG image, form, style and protocol-relative resources', async () => {
    const directory = await artifact({
      'index.html': [
        '<link rel="canonical icon" href="https://icons.invalid/favicon.ico">',
        '<svg><image href="https://svg.invalid/image.svg"></image></svg>',
        '<svg><image xlink:href="//xlink.invalid/image.svg"></image></svg>',
        '<form action="https://forms.invalid/submit"></form>',
        '<main style="background:url(//inline.invalid/hero.png)"></main>',
        '<style>/* url(https://comment.invalid/pixel) */ .hero { mask: url(https://style.invalid/mask.svg) }</style>',
        '<style>.note::after { content: "</StYlEgUiDe><img src=https://style-raw.invalid/pixel>" }</STYLE>',
      ].join('\n'),
      'app.css': '@import "//imports.invalid/app.css"; .hero { background:url(https://css.invalid/hero.png) }',
    });

    expect((await auditBrowserArtifact(directory)).violations).toEqual([
      'active external resource: http://imports.invalid',
      'active external resource: http://inline.invalid',
      'active external resource: http://xlink.invalid',
      'active external resource: https://css.invalid',
      'active external resource: https://forms.invalid',
      'active external resource: https://icons.invalid',
      'active external resource: https://style.invalid',
      'active external resource: https://svg.invalid',
    ]);
  });

  it.each([
    'AKIA1234567890ABCDEF',
    'ASIA1234567890ABCDEF',
  ])('rejects the AWS access-key family represented by %s without disclosing it', async accessKey => {
    const directory = await artifact({
      'credentials.txt': accessKey,
    });

    const result = await auditBrowserArtifact(directory);
    expect(result.violations).toEqual(['credential shape: aws-access-key']);
    expect(JSON.stringify(result)).not.toContain(accessKey);
  });

  it('rejects a private key header without disclosing it', async () => {
    const privateKey = '-----BEGIN OPENSSH PRIVATE KEY-----';
    const directory = await artifact({ 'credentials.txt': privateKey });

    const result = await auditBrowserArtifact(directory);
    expect(result.violations).toEqual(['credential shape: private-key']);
    expect(JSON.stringify(result)).not.toContain(privateKey);
  });

  it('keeps canonical, schema, anchors, data-style and documentary raw markup inert', async () => {
    const directory = await artifact({
      'index.html': [
        '<link rel="canonical" href="https://canonical.invalid/page">',
        '<a href="https://anchor.invalid/page">Documentation</a>',
        '<script type="application/ld+json">{"url":"https://schema.invalid/item","markup":"<img src=https://script.invalid/pixel>"}</script>',
        '<aside data-style="background:url(https://data-style.invalid/pixel)"></aside>',
        '<!-- <img src="https://comment.invalid/pixel"> -->',
      ].join('\n'),
    });

    expect(await auditBrowserArtifact(directory)).toEqual({ files: 1, violations: [] });
  });
});
