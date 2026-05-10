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

export function rateLimit(opts: Options) {
  const buckets = new Map<string, Bucket>();

  function check(key: string): Result {
    const now = Date.now();
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

// Singleton para uso em routes
export const enterpriseLeadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1h
  max: 5,
});
