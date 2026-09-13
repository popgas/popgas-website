import { beforeEach, describe, expect, it } from 'vitest';
import { GTM_ID, resolveGtmId, track } from './analytics';

describe('analytics.track', () => {
  beforeEach(() => {
    window.dataLayer = undefined;
  });

  it('does not enable GTM without an explicit environment value', () => {
    expect(GTM_ID).toBeNull();
    expect(resolveGtmId(undefined)).toBeNull();
  });

  it('accepts the production GTM container id', () => {
    expect(resolveGtmId('GTM-K6435QMB')).toBe('GTM-K6435QMB');
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
