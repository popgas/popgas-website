interface Bucket {
  count: number;
  resetAt: number;
}

interface Options {
  windowMs: number;
  max: number;
}

interface Result {
  allowed: boolean;
  remaining: number;
  resetAt: number;
}

const CLEANUP_INTERVAL_MS = 60 * 1000;

/**
 * In-memory rate limiter.
 *
 * IMPORTANT — Serverless caveat:
 * On Vercel Functions / Lambda, the Map lives inside the function instance.
 * Cold starts produce a fresh Map; concurrent invocations may use different
 * instances. Treat this as best-effort protection against simple abuse.
 * For hard guarantees, swap for Vercel KV / Upstash Redis.
 */
export function rateLimit(opts: Options) {
  const buckets = new Map<string, Bucket>();
  let lastCleanup = Date.now();

  function pruneExpired(now: number) {
    if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
    lastCleanup = now;
    for (const [k, b] of buckets) {
      if (b.resetAt < now) buckets.delete(k);
    }
  }

  function check(key: string): Result {
    const now = Date.now();
    pruneExpired(now);

    const bucket = buckets.get(key);

    if (!bucket || bucket.resetAt < now) {
      const fresh: Bucket = { count: 1, resetAt: now + opts.windowMs };
      buckets.set(key, fresh);
      return { allowed: true, remaining: opts.max - 1, resetAt: fresh.resetAt };
    }

    if (bucket.count >= opts.max) {
      return { allowed: false, remaining: 0, resetAt: bucket.resetAt };
    }

    bucket.count++;
    return {
      allowed: true,
      remaining: opts.max - bucket.count,
      resetAt: bucket.resetAt,
    };
  }

  return { check };
}

// 5 leads/h por IP (rota /api/lead-enterprise — alto valor, baixo volume)
export const enterpriseLeadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
});

// 10 contatos/15min por IP (rota /api/contact — volume maior, menor valor)
export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
});
