import { readdir, readFile, stat } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const productionOrigins = new Set([
  'https://api.popgas.com.br',
  'https://customer-gateway.popgas.com.br',
]);

const credentialShapes = [
  ['google-api-key', /AIza[0-9A-Za-z_-]{20,}/],
  ['aws-access-key', /(?:AKIA|ASIA)[0-9A-Z]{16}/],
  ['private-key', /-----BEGIN [A-Z ]*PRIVATE KEY-----/],
];

const textExtensions = new Set(['.css', '.html', '.js', '.json', '.txt', '.xml']);

export async function auditBrowserArtifact(root) {
  const files = await listTextFiles(root);
  const violations = new Set();

  for (const file of files) {
    const contents = await readFile(file, 'utf8');
    for (const origin of referencedHttpOrigins(contents)) {
      if (productionOrigins.has(origin)) {
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
  const tags = parseHtmlTags(html);
  for (const { attributes, name } of tags) {
    const candidates = activeResourceUrls(name, attributes);
    for (const candidate of candidates) addExternalOrigin(origins, candidate);
    for (const origin of activeCssOrigins(attributes.get('style') ?? '')) origins.add(origin);
  }
  for (const tag of tags) {
    if (tag.name !== 'style') continue;
    for (const origin of activeCssOrigins(tag.rawText ?? '')) origins.add(origin);
  }
  return origins;
}

function activeResourceUrls(tag, attributes) {
  const candidates = [];
  if (['audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video'].includes(tag)) {
    candidates.push(attributes.get('src'));
  }
  if (tag === 'img' || tag === 'source') candidates.push(...splitSrcset(attributes.get('srcset')));
  if (tag === 'video') candidates.push(attributes.get('poster'));
  if (tag === 'object') candidates.push(attributes.get('data'));
  if (tag === 'form') candidates.push(attributes.get('action'));
  if (tag === 'link' && isActiveLink(attributes)) candidates.push(attributes.get('href'));
  if (tag === 'image') candidates.push(attributes.get('href'), attributes.get('xlink:href'));
  return candidates;
}

function isActiveLink(attributes) {
  const rel = (attributes.get('rel') ?? '').toLowerCase().split(/\s+/);
  return rel.some(value => ['stylesheet', 'preload', 'modulepreload', 'prefetch', 'icon'].includes(value));
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

function referencedHttpOrigins(contents) {
  const origins = new Set();
  for (const rawUrl of contents.match(/https?:\/\/[^\s"'<>]+/gi) ?? []) {
    const origin = safeHttpOrigin(rawUrl.replace(/[),.;]+$/, ''));
    if (origin) origins.add(origin);
  }
  return origins;
}

function safeHttpOrigin(rawUrl) {
  try {
    const parsed = new URL(rawUrl, 'http://127.0.0.1/');
    return parsed.protocol === 'http:' || parsed.protocol === 'https:' ? parsed.origin : undefined;
  } catch {
    return undefined;
  }
}

function addExternalOrigin(origins, rawUrl) {
  if (!rawUrl || /^(?:data:|blob:|#|\/[^/])/i.test(rawUrl)) return;
  try {
    const url = new URL(rawUrl, 'http://127.0.0.1/');
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
    if (url.hostname === '127.0.0.1' || url.hostname === 'localhost') return;
    origins.add(url.origin);
  } catch {
    // Malformed documentary values are not executable URLs.
  }
}

function parseHtmlTags(html) {
  const tags = [];
  const lower = html.toLowerCase();
  let cursor = 0;

  while (cursor < html.length) {
    const opening = html.indexOf('<', cursor);
    if (opening < 0) break;
    if (html.startsWith('<!--', opening)) {
      const commentEnd = html.indexOf('-->', opening + 4);
      cursor = commentEnd < 0 ? html.length : commentEnd + 3;
      continue;
    }
    const tagEnd = findHtmlTagEnd(html, opening + 1);
    if (tagEnd < 0) break;
    const tag = parseHtmlTag(html.slice(opening + 1, tagEnd));
    cursor = tagEnd + 1;
    if (!tag) continue;

    tags.push(tag);
    if (tag.name !== 'script' && tag.name !== 'style') continue;
    const closing = findRawTextClosing(lower, tag.name, cursor);
    if (closing < 0) {
      if (tag.name === 'style') tag.rawText = html.slice(cursor);
      break;
    }
    if (tag.name === 'style') tag.rawText = html.slice(cursor, closing);
    const closingEnd = findHtmlTagEnd(html, closing + 2);
    cursor = closingEnd < 0 ? html.length : closingEnd + 1;
  }

  return tags;
}

function findRawTextClosing(lowerHtml, tagName, start) {
  const prefix = `</${tagName}`;
  let cursor = start;
  while (cursor < lowerHtml.length) {
    const candidate = lowerHtml.indexOf(prefix, cursor);
    if (candidate < 0) return -1;
    const delimiter = lowerHtml[candidate + prefix.length];
    if (delimiter === '>' || delimiter === '/' || isHtmlWhitespace(delimiter)) return candidate;
    cursor = candidate + prefix.length;
  }
  return -1;
}

function isHtmlWhitespace(character) {
  return character === '\t' || character === '\n' || character === '\f'
    || character === '\r' || character === ' ';
}

function findHtmlTagEnd(html, start) {
  let quote;
  for (let index = start; index < html.length; index += 1) {
    const character = html[index];
    if (quote) {
      if (character === quote) quote = undefined;
    } else if (character === '"' || character === "'") {
      quote = character;
    } else if (character === '>') {
      return index;
    }
  }
  return -1;
}

function parseHtmlTag(source) {
  let cursor = 0;
  while (isHtmlWhitespace(source[cursor])) cursor += 1;
  if (!/[a-z]/i.test(source[cursor] ?? '')) return undefined;
  const nameStart = cursor;
  while (/[a-z0-9:-]/i.test(source[cursor] ?? '')) cursor += 1;
  const name = source.slice(nameStart, cursor).toLowerCase();
  const attributes = new Map();

  while (cursor < source.length) {
    while (isHtmlWhitespace(source[cursor])) cursor += 1;
    if (cursor >= source.length || source[cursor] === '/') break;
    const attributeStart = cursor;
    while (cursor < source.length && !isHtmlWhitespace(source[cursor]) && source[cursor] !== '=') cursor += 1;
    const attribute = source.slice(attributeStart, cursor).toLowerCase();
    while (isHtmlWhitespace(source[cursor])) cursor += 1;
    let value = '';
    if (source[cursor] === '=') {
      cursor += 1;
      while (isHtmlWhitespace(source[cursor])) cursor += 1;
      const quote = source[cursor] === '"' || source[cursor] === "'" ? source[cursor] : undefined;
      if (quote) {
        cursor += 1;
        const valueStart = cursor;
        while (cursor < source.length && source[cursor] !== quote) cursor += 1;
        value = source.slice(valueStart, cursor);
        if (source[cursor] === quote) cursor += 1;
      } else {
        const valueStart = cursor;
        while (cursor < source.length && !isHtmlWhitespace(source[cursor])) cursor += 1;
        value = source.slice(valueStart, cursor);
      }
    }
    if (attribute && !attributes.has(attribute)) attributes.set(attribute, value);
  }

  return { attributes, name };
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
