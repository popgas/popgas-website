import { describe, it, expect, vi } from 'vitest';
import { rateLimit } from './rate-limit';

describe('rate-limit', () => {
  it('allows requests under limit', () => {
    const r = rateLimit({ windowMs: 1000, max: 3 });
    expect(r.check('a').allowed).toBe(true);
    expect(r.check('a').allowed).toBe(true);
    expect(r.check('a').allowed).toBe(true);
  });

  it('blocks at limit', () => {
    const r = rateLimit({ windowMs: 1000, max: 2 });
    r.check('a');
    r.check('a');
    expect(r.check('a').allowed).toBe(false);
  });

  it('separates buckets per key', () => {
    const r = rateLimit({ windowMs: 1000, max: 1 });
    expect(r.check('a').allowed).toBe(true);
    expect(r.check('b').allowed).toBe(true);
    expect(r.check('a').allowed).toBe(false);
  });

  it('resets after window', () => {
    vi.useFakeTimers();
    const r = rateLimit({ windowMs: 1000, max: 1 });
    r.check('a');
    expect(r.check('a').allowed).toBe(false);
    vi.advanceTimersByTime(1100);
    expect(r.check('a').allowed).toBe(true);
    vi.useRealTimers();
  });
});
