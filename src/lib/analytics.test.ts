import { beforeEach, describe, expect, it } from 'vitest';
import { GTM_ID, classifyOutboundClick, track } from './analytics';

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

describe('classifyOutboundClick', () => {
  it('classifies WhatsApp, demo video and ERP login links', () => {
    expect(classifyOutboundClick('https://wa.me/553432386577?text=Oi')).toBe('whatsapp_click');
    expect(classifyOutboundClick('https://api.whatsapp.com/send?phone=55')).toBe('whatsapp_click');
    expect(classifyOutboundClick('https://www.youtube.com/watch?v=mnVJSrz9Jlo')).toBe('demo_video_click');
    expect(classifyOutboundClick('https://erp.popgas.com.br/login')).toBe('login_click');
  });

  it('ignores internal and unrelated links', () => {
    expect(classifyOutboundClick('/planos')).toBeNull();
    expect(classifyOutboundClick('https://erp.popgas.com.br/signup?modules=base')).toBeNull();
    expect(classifyOutboundClick('https://instagram.com/popgas')).toBeNull();
  });
});
