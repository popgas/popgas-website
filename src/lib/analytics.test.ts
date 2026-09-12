import { beforeEach, describe, expect, it } from 'vitest';
import { GTM_ID, resolveGtmId, track } from './analytics';

describe('analytics.track', () => {
  beforeEach(() => {
    window.dataLayer = undefined;
  });

  it('exposes the GTM container id', () => {
    expect(GTM_ID).toBe('GTM-K6435QMB');
  });

  it('accepts an isolated sandbox GTM container id', () => {
    expect(resolveGtmId('GTM-SANDBOX123')).toBe('GTM-SANDBOX123');
  });

  it('rejects an invalid GTM container id before rendering it into HTML', () => {
    expect(() => resolveGtmId('GTM-X\";alert(1)')).toThrow('NEXT_PUBLIC_GTM_ID');
  });

  it('pushes the event into window.dataLayer with event name and params', () => {
    track({ name: 'cta_click', cta_text: 'Começar grátis', page: '/' });

    expect(window.dataLayer).toEqual([
      { event: 'cta_click', cta_text: 'Começar grátis', page: '/' },
    ]);
  });

  it('appends to an existing dataLayer', () => {
    window.dataLayer = [{ event: 'gtm.js' }];
    track({ name: 'signup_redirect', modules: 'base', billing: 'monthly' });

    expect(window.dataLayer).toHaveLength(2);
    expect(window.dataLayer?.[1]).toEqual({ event: 'signup_redirect', modules: 'base', billing: 'monthly' });
  });
});
