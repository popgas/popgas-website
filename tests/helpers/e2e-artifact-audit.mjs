import { readdir, readFile, stat } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const productionOrigins = [
  'https://api.popgas.com.br',
  'https://customer-gateway.popgas.com.br',
];

const credentialShapes = [
  ['google-api-key', /AIza[0-9A-Za-z_-]{20,}/],
  ['aws-access-key', /AKIA[0-9A-Z]{16}/],
  ['private-key', /-----BEGIN [A-Z ]*PRIVATE KEY-----/],
];

const textExtensions = new Set(['.css', '.html', '.js', '.json', '.txt', '.xml']);

export async function auditBrowserArtifact(root) {
  const files = await listTextFiles(root);
  const violations = new Set();

  for (const file of files) {
    const contents = await readFile(file, 'utf8');
    for (const origin of productionOrigins) {
      if (contents.toLowerCase().includes(origin)) {
        violations.add(`production service origin: ${origin}`);
      }
    }
    for (const [label, pattern] of credentialShapes) {
      if (pattern.test(contents)) violations.add(`credential shape: ${label}`);
    }
    if (extname(file) === '.html') {
      for (const origin of activeHtmlOrigins(contents)) {
        violations.add(`active external resource: ${origin}`);
      }
    }
    if (extname(file) === '.css') {
      for (const origin of activeCssOrigins(contents)) {
        violations.add(`active external resource: ${origin}`);
      }
    }
  }

  return { files: files.length, violations: [...violations].sort() };
}

async function listTextFiles(root) {
  const result = [];
  async function visit(candidate) {
    const metadata = await stat(candidate);
    if (metadata.isDirectory()) {
      for (const name of await readdir(candidate)) await visit(join(candidate, name));
      return;
    }
    if (textExtensions.has(extname(candidate))) result.push(candidate);
  }
  await visit(root);
  return result.sort();
}

function activeHtmlOrigins(html) {
  const origins = new Set();
  const withoutComments = html.replace(/<!--[^]*?-->/g, '');
  for (const match of withoutComments.matchAll(/<([a-z][\w:-]*)([^>]*)>/gi)) {
    const tag = match[1].toLowerCase();
    if (tag.startsWith('/')) continue;
    const attributes = parseAttributes(match[2]);
    const candidates = [];
    if (tag === 'script' || tag === 'iframe' || tag === 'img' || tag === 'source' || tag === 'audio' || tag === 'video' || tag === 'embed' || tag === 'input') {
      candidates.push(attributes.get('src'));
    }
    if (tag === 'img' || tag === 'source') candidates.push(...splitSrcset(attributes.get('srcset')));
    if (tag === 'video') candidates.push(attributes.get('poster'));
    if (tag === 'object') candidates.push(attributes.get('data'));
    if (tag === 'link' && isActiveLink(attributes)) candidates.push(attributes.get('href'));
    for (const candidate of candidates) addExternalOrigin(origins, candidate);
    for (const origin of activeCssOrigins(attributes.get('style') ?? '')) origins.add(origin);
  }
  for (const style of withoutComments.matchAll(/<style(?:\s[^>]*)?>([^]*?)<\/style\s*>/gi)) {
    for (const origin of activeCssOrigins(style[1])) origins.add(origin);
  }
  return origins;
}

function parseAttributes(source) {
  const attributes = new Map();
  for (const match of source.matchAll(/(?:^|\s)([a-z_:][-\w:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/gi)) {
    attributes.set(match[1].toLowerCase(), match[2] ?? match[3] ?? match[4] ?? '');
  }
  return attributes;
}

function isActiveLink(attributes) {
  const rel = (attributes.get('rel') ?? '').toLowerCase().split(/\s+/);
  return rel.some(value => ['stylesheet', 'preload', 'modulepreload', 'prefetch'].includes(value));
}

function splitSrcset(value) {
  return value ? value.split(',').map(candidate => candidate.trim().split(/\s+/)[0]) : [];
}

function activeCssOrigins(css) {
  const origins = new Set();
  const withoutComments = css.replace(/\/\*[^]*?\*\//g, '');
  for (const match of withoutComments.matchAll(/url\(\s*(?:"([^"]+)"|'([^']+)'|([^\s)'";]+))\s*\)/gi)) {
    addExternalOrigin(origins, match[1] ?? match[2] ?? match[3]);
  }
  for (const match of withoutComments.matchAll(/@import\s+(?:url\(\s*)?(?:"([^"]+)"|'([^']+)'|([^\s)'";]+))/gi)) {
    addExternalOrigin(origins, match[1] ?? match[2] ?? match[3]);
  }
  return origins;
}

function addExternalOrigin(origins, rawUrl) {
  if (!rawUrl || /^(?:data:|blob:|#|\/[^/])/i.test(rawUrl)) return;
  try {
    const url = new URL(rawUrl, 'http://127.0.0.1');
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
    if (url.hostname === '127.0.0.1' || url.hostname === 'localhost') return;
    origins.add(url.origin);
  } catch {
    // Malformed documentary values are not executable URLs.
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = await auditBrowserArtifact(process.argv[2] ?? '');
  if (result.violations.length) {
    for (const violation of result.violations) console.error(violation);
    process.exitCode = 1;
  } else {
    console.log(`browser-artifact-audit=pass files=${result.files} violations=0`);
  }
}
