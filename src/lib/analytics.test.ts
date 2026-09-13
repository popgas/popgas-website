import { beforeEach, describe, expect, it } from 'vitest';
import { GTM_ID, track } from './analytics';

describe('analytics.track', () => {
  beforeEach(() => {
    window.dataLayer = undefined;
  });

  it('exposes the GTM container id', () => {
    expect(GTM_ID).toBe('GTM-K6435QMB');
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
