import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { existsSync } from 'node:fs';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

async function main() {
  const upstream = new URL(process.argv[2] ?? '');
  const mutation = process.argv.includes('--delayed-external-mutation');
  const chromeExecutable = resolveChrome(process.env.CHROME_EXECUTABLE);
  const temporaryDirectory = await mkdtemp(join(tmpdir(), 'popgas-website-browser-'));
  const profileDirectory = join(temporaryDirectory, 'profile');
  const sentinelHits = [];
  let child;
  let session;
  let pageOrigin;

  const sentinel = createServer((request, response) => {
  sentinelHits.push(new URL(request.url ?? '/', 'http://sentinel.invalid').pathname);
  response.writeHead(204).end();
  });
  await listen(sentinel);
  const sentinelAddress = sentinel.address();
  if (!sentinelAddress || typeof sentinelAddress === 'string') throw new Error('sentinel did not bind');

  const proxy = createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url ?? '/', upstream);
    if (mutation && requestUrl.pathname === '/__e2e_delayed_external.js') {
      const script = `window.__e2eDelayedMutationLoaded=true;window.__e2eBlockedOrigins=[];document.addEventListener('securitypolicyviolation',event=>{try{window.__e2eBlockedOrigins.push(new URL(event.blockedURI).origin)}catch{}});setTimeout(() => fetch('http://delayed-external.invalid:${sentinelAddress.port}/probe'), 1500);`;
      response.writeHead(200, {
        'content-length': Buffer.byteLength(script),
        'content-type': 'application/javascript',
      });
      response.end(script);
      return;
    }

    const upstreamResponse = await fetch(new URL(`${requestUrl.pathname}${requestUrl.search}`, upstream), {
      method: request.method,
      redirect: 'manual',
    });
    const headers = Object.fromEntries(upstreamResponse.headers);
    delete headers['content-encoding'];
    delete headers['content-length'];
    delete headers['transfer-encoding'];
    let body = Buffer.from(await upstreamResponse.arrayBuffer());
    if (mutation && headers['content-type']?.includes('text/html')) {
      body = Buffer.from(body.toString('utf8').replace(
        '</head>',
        '<script src="/__e2e_delayed_external.js"></script></head>',
      ));
    }
    headers['content-length'] = String(body.byteLength);
    response.writeHead(upstreamResponse.status, headers);
    response.end(body);
  } catch {
    response.writeHead(502).end();
  }
  });
  await listen(proxy);
  const proxyAddress = proxy.address();
  if (!proxyAddress || typeof proxyAddress === 'string') throw new Error('proxy did not bind');
  pageOrigin = `http://127.0.0.1:${proxyAddress.port}`;

  const externalOrigins = new Set();
  const runtimeErrors = [];
  let documentStatus;
  let responseCsp;
  let lastRequestAt = Date.now();
  const startedAt = Date.now();

  try {
  child = spawn(chromeExecutable, [
    '--headless=new',
    '--disable-gpu',
    '--disable-background-networking',
    '--disable-component-update',
    '--disable-default-apps',
    '--disable-extensions',
    '--disable-sync',
    '--metrics-recording-only',
    '--no-default-browser-check',
    '--no-first-run',
    '--host-resolver-rules=MAP delayed-external.invalid 127.0.0.1',
    `--user-data-dir=${profileDirectory}`,
    '--remote-debugging-port=0',
    'about:blank',
  ], { stdio: 'ignore' });
  const childExit = childExitPromise(child);
  const endpoint = await debugEndpoint(profileDirectory, childExit);
  const target = await pageTarget(endpoint);
  session = await CdpSession.connect(target.webSocketDebuggerUrl);

  session.on('Fetch.requestPaused', params => {
    const rawUrl = params.request?.url;
    const origin = safeHttpOrigin(rawUrl);
    if (origin && origin !== pageOrigin) {
      externalOrigins.add(origin);
      void session.command('Fetch.failRequest', {
        errorReason: 'BlockedByClient',
        requestId: params.requestId,
      }).catch(() => undefined);
      return;
    }
    void session.command('Fetch.continueRequest', { requestId: params.requestId }).catch(() => undefined);
  });
  session.on('Network.requestWillBeSent', params => {
    const origin = safeHttpOrigin(params.request?.url);
    if (!origin) return;
    lastRequestAt = Date.now();
    if (origin !== pageOrigin) externalOrigins.add(origin);
  });
  session.on('Network.responseReceived', params => {
    if (params.type !== 'Document') return;
    const origin = safeHttpOrigin(params.response?.url);
    if (origin !== pageOrigin) return;
    documentStatus = params.response?.status;
    responseCsp = headerValue(params.response?.headers, 'content-security-policy');
  });
  session.on('Runtime.exceptionThrown', params => {
    runtimeErrors.push(String(params.exceptionDetails?.exception?.description ?? params.exceptionDetails?.text ?? 'runtime error'));
  });

  await session.command('Network.enable');
  await session.command('Page.enable');
  await session.command('Runtime.enable');
  await session.command('Fetch.enable', { patterns: [{ requestStage: 'Request', urlPattern: 'http*' }] });
  await session.command('Page.navigate', { url: `${pageOrigin}/` });

  await waitFor(() => documentStatus !== undefined, 30_000, 'homepage did not receive a document response');
  if (documentStatus !== 200) throw new Error(`homepage returned HTTP ${documentStatus}`);
  try {
    await waitFor(async () => Boolean(await evaluate(session, `
      /^PopGás Sistema/.test(document.title)
        && !/Conta Fácil/i.test(document.body.innerText)
        && /Gestão de vasilhames/i.test(document.body.innerText)
        && Boolean(document.querySelector('[data-testid="e2e-local-delivery-map"]'))
    `)), 30_000, 'homepage did not render the PopGas E2E identity');
  } catch {
    const state = await evaluate(session, `JSON.stringify({
      ready: document.readyState,
      popgasTitle: /^PopGás Sistema/.test(document.title),
      operationsCopy: /Gestão de vasilhames/i.test(document.body.innerText),
      conta: /Conta Fácil/i.test(document.body.innerText),
      localMap: Boolean(document.querySelector('[data-testid="e2e-local-delivery-map"]')),
      nextScripts: document.querySelectorAll('script[src^="/_next/"]').length
    })`);
    throw new Error(`homepage did not render the PopGas E2E identity; state=${state}; runtime-errors=${runtimeErrors.length}`);
  }
  await assertFinalPage(session, pageOrigin);
  assertLocalCsp(responseCsp);
  if (mutation && await evaluate(session, 'window.__e2eDelayedMutationLoaded === true') !== true) {
    throw new Error('delayed external mutation script did not execute');
  }

  await wait(4_000);
  const quietStartedAt = Date.now();
  await waitFor(
    () => Date.now() - Math.max(quietStartedAt, lastRequestAt) >= 2_000,
    30_000,
    'homepage did not reach a two-second request quiet window',
  );
  await assertFinalPage(session, pageOrigin);
  const cspBlockedOrigins = await evaluate(session, 'window.__e2eBlockedOrigins ?? []');
  for (const origin of Array.isArray(cspBlockedOrigins) ? cspBlockedOrigins : []) {
    if (typeof origin === 'string' && origin !== pageOrigin) externalOrigins.add(origin);
  }

  await closeChrome(profileDirectory);
  const exitCode = await withTimeout(childExit, 5_000, 'Chrome did not close gracefully');
  if (exitCode !== 0) throw new Error(`Chrome exited ${exitCode}`);
  if (sentinelHits.length !== 0) throw new Error('preventive network block allowed a request to leave the browser');
  if (externalOrigins.size > 0) {
    throw new Error(`page-owned external request: ${[...externalOrigins].sort().join(', ')}`);
  }
  if (Date.now() - startedAt < 5_900) throw new Error('browser observation and quiet windows were not additive');
  console.log('website-browser-render=pass csp=effective observation=4s quiet=2s external-requests=0');
  } finally {
  session?.close();
  if (child?.exitCode === null) {
    try {
      await withTimeout(closeChrome(profileDirectory), 1_000, 'Chrome close timeout');
    } catch {
      child.kill('SIGKILL');
    }
  }
  await Promise.all([closeServer(proxy), closeServer(sentinel)]);
  await rm(temporaryDirectory, { force: true, recursive: true, maxRetries: 3 });
  }
}

function assertLocalCsp(policy) {
  if (!policy) throw new Error('homepage has no effective Content-Security-Policy');
  const required = [
    "default-src 'self'", "script-src 'self'", "style-src 'self'",
    "img-src 'self'", "font-src 'self'", "connect-src 'self'",
    "frame-src 'none'", "worker-src 'self'", "object-src 'none'",
    "base-uri 'self'", "form-action 'self'",
  ];
  for (const directive of required) {
    if (!policy.includes(directive)) throw new Error(`homepage CSP misses ${directive.split(' ')[0]}`);
  }
  if (/https?:/i.test(policy)) throw new Error('homepage CSP permits an external network origin');
}

async function assertFinalPage(activeSession, origin) {
  const finalOrigin = await evaluate(activeSession, 'location.origin');
  const finalPath = await evaluate(activeSession, 'location.pathname');
  if (finalOrigin !== origin || finalPath !== '/') throw new Error('homepage reached an unexpected final page');
}

function resolveChrome(configured) {
  const candidates = [
    configured,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean);
  const found = candidates.find(candidate => existsSync(candidate));
  if (!found) throw new Error('Chrome is required; set CHROME_EXECUTABLE');
  return found;
}

async function listen(server) {
  await new Promise((resolveListen, rejectListen) => {
    server.once('error', rejectListen);
    server.listen(0, '127.0.0.1', resolveListen);
  });
}

async function closeServer(server) {
  if (!server.listening) return;
  await new Promise(resolveClose => {
    server.close(resolveClose);
    server.closeAllConnections?.();
  });
}

async function debugEndpoint(profile, childExit) {
  const activePort = join(profile, 'DevToolsActivePort');
  await waitFor(async () => {
    if (existsSync(activePort)) return true;
    const exited = await Promise.race([childExit.then(() => true), wait(0).then(() => false)]);
    if (exited) throw new Error('Chrome exited before publishing DevTools');
    return false;
  }, 5_000, 'Chrome did not publish DevTools');
  const [port] = (await readFile(activePort, 'utf8')).trim().split('\n');
  if (!/^\d+$/.test(port)) throw new Error('Chrome published an invalid DevTools endpoint');
  return `http://127.0.0.1:${port}`;
}

async function pageTarget(endpoint) {
  return waitFor(async () => {
    const targets = await fetch(`${endpoint}/json/list`).then(response => response.json());
    const page = targets.find(target => target.type === 'page' && target.webSocketDebuggerUrl);
    return page || false;
  }, 5_000, 'Chrome did not publish a page target');
}

async function evaluate(activeSession, expression) {
  const response = await activeSession.command('Runtime.evaluate', { expression, returnByValue: true });
  return response.result?.value;
}

async function closeChrome(profile) {
  const [port, browserPath] = (await readFile(join(profile, 'DevToolsActivePort'), 'utf8')).trim().split('\n');
  const browserSession = await CdpSession.connect(`ws://127.0.0.1:${port}${browserPath}`);
  await browserSession.command('Browser.close');
  browserSession.close();
}

async function waitFor(predicate, timeoutMs, message) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const result = await predicate();
    if (result) return result;
    await wait(25);
  }
  throw new Error(message);
}

function wait(milliseconds) {
  return new Promise(resolveWait => setTimeout(resolveWait, milliseconds));
}

async function withTimeout(promise, milliseconds, message) {
  let timeout;
  try {
    return await Promise.race([
      promise,
      new Promise((_, reject) => { timeout = setTimeout(() => reject(new Error(message)), milliseconds); }),
    ]);
  } finally {
    clearTimeout(timeout);
  }
}

function childExitPromise(process) {
  if (process.exitCode !== null) return Promise.resolve(process.exitCode);
  return new Promise((resolveExit, rejectExit) => {
    process.once('error', rejectExit);
    process.once('exit', resolveExit);
  });
}

function safeHttpOrigin(rawUrl) {
  if (typeof rawUrl !== 'string' || !/^https?:\/\//i.test(rawUrl)) return undefined;
  try {
    return new URL(rawUrl).origin;
  } catch {
    return undefined;
  }
}

function headerValue(headers, name) {
  if (!headers || typeof headers !== 'object') return undefined;
  const entry = Object.entries(headers).find(([key]) => key.toLowerCase() === name);
  return typeof entry?.[1] === 'string' ? entry[1] : undefined;
}

class CdpSession {
  nextId = 1;
  pending = new Map();
  listeners = new Map();

  constructor(socket) {
    this.socket = socket;
    socket.addEventListener('message', event => this.receive(String(event.data)));
    socket.addEventListener('close', () => this.rejectPending(new Error('DevTools connection closed')));
  }

  static async connect(url) {
    const socket = new WebSocket(url);
    await withTimeout(new Promise((resolveOpen, rejectOpen) => {
      socket.addEventListener('open', resolveOpen, { once: true });
      socket.addEventListener('error', () => rejectOpen(new Error('DevTools connection failed')), { once: true });
    }), 5_000, 'DevTools connection timed out');
    return new CdpSession(socket);
  }

  on(method, listener) {
    const listeners = this.listeners.get(method) ?? [];
    listeners.push(listener);
    this.listeners.set(method, listeners);
  }

  command(method, params = {}) {
    const id = this.nextId++;
    return new Promise((resolveCommand, rejectCommand) => {
      const timeout = setTimeout(() => {
        this.pending.delete(id);
        rejectCommand(new Error(`DevTools command timed out: ${method}`));
      }, 5_000);
      this.pending.set(id, { resolveCommand, rejectCommand, timeout });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    this.socket.close();
  }

  receive(raw) {
    const message = JSON.parse(raw);
    if (message.id !== undefined) {
      const pending = this.pending.get(message.id);
      if (!pending) return;
      this.pending.delete(message.id);
      clearTimeout(pending.timeout);
      if (message.error) pending.rejectCommand(new Error(`DevTools command failed: ${message.error.message}`));
      else pending.resolveCommand(message.result ?? {});
      return;
    }
    for (const listener of this.listeners.get(message.method) ?? []) listener(message.params ?? {});
  }

  rejectPending(error) {
    for (const pending of this.pending.values()) {
      clearTimeout(pending.timeout);
      pending.rejectCommand(error);
    }
    this.pending.clear();
  }
}

await main();
