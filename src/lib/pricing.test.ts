import { afterEach, describe, it, expect, vi } from 'vitest';
import {
  MODULES,
  TRIAL_DAYS,
  calculateTotal,
  hasPromoDiscount,
  INTRO_PROMO,
  introPromoPeriod,
  introPromoTotal,
  buildSignupUrl,
  PROFILE_PRESETS,
} from './pricing';

afterEach(() => {
  delete process.env.NEXT_PUBLIC_ERP_URL;
  vi.resetModules();
});

describe('pricing ERP URLs', () => {
  it('uses the legacy ERP origin when NEXT_PUBLIC_ERP_URL is absent', async () => {
    vi.resetModules();

    const { LOGIN_URL, SIGNUP_URL } = await import('./pricing');

    expect(SIGNUP_URL).toBe('https://erp.popgas.com.br/signup');
    expect(LOGIN_URL).toBe('https://erp.popgas.com.br/login');
  });

  it('uses the legacy ERP origin when NEXT_PUBLIC_ERP_URL is empty', async () => {
    process.env.NEXT_PUBLIC_ERP_URL = '';
    vi.resetModules();

    const { LOGIN_URL, SIGNUP_URL } = await import('./pricing');

    expect(SIGNUP_URL).toBe('https://erp.popgas.com.br/signup');
    expect(LOGIN_URL).toBe('https://erp.popgas.com.br/login');
  });

  it('uses NEXT_PUBLIC_ERP_URL for signup and login links', async () => {
    process.env.NEXT_PUBLIC_ERP_URL = 'http://localhost:5173';
    vi.resetModules();

    const { HELP_DOCS_URL, LOGIN_URL, SIGNUP_URL } = await import('./pricing');

    expect(SIGNUP_URL).toBe('http://localhost:5173/signup');
    expect(LOGIN_URL).toBe('http://localhost:5173/login');
    expect(HELP_DOCS_URL).toBe('http://localhost:5173/docs');
  });
});

describe('pricing.calculateTotal', () => {
  it('returns base price when only essencial selected', () => {
    expect(calculateTotal(['essencial'])).toBe(99.90);
  });

  it('sums modules correctly', () => {
    expect(calculateTotal(['essencial', 'gestao', 'fiscal'])).toBeCloseTo(198.90, 2);
  });

  it('total for full plan', () => {
    const total = calculateTotal(['essencial', 'gestao', 'fiscal', 'techia']);
    expect(total).toBeCloseTo(398.80, 2);
  });
});

describe('pricing.buildSignupUrl', () => {
  it('builds URL with default params', () => {
    const url = buildSignupUrl({
      modules: ['essencial'],
      billing: 'monthly',
    });
    expect(url).toContain('modules=base');
    expect(url).toContain('billing=monthly');
    expect(url).toContain('utm_source=site');
  });

  it('joins multiple modules by comma', () => {
    const url = buildSignupUrl({
      modules: ['essencial', 'fiscal', 'techia'],
    });
    expect(url).toContain('modules=base%2Cfiscal%2Cai');
    expect(url).toContain('billing=monthly');
  });

  it('includes custom utm_campaign when provided', () => {
    const url = buildSignupUrl({
      modules: ['essencial'],
      billing: 'monthly',
      utmCampaign: 'header_cta',
    });
    expect(url).toContain('utm_campaign=header_cta');
  });
});

describe('pricing.MODULES', () => {
  it('has 4 modules', () => {
    expect(Object.keys(MODULES)).toHaveLength(4);
  });

  it('essencial is the base', () => {
    expect(MODULES.essencial.isBase).toBe(true);
  });

  it('techia is premium', () => {
    expect(MODULES.techia.isPremium).toBe(true);
  });
});

describe('pricing.PROFILE_PRESETS', () => {
  it('has 4 presets', () => {
    expect(PROFILE_PRESETS).toHaveLength(4);
  });

  it('iniciante has only essencial', () => {
    const iniciante = PROFILE_PRESETS.find(p => p.id === 'iniciante');
    expect(iniciante?.modules).toEqual(['essencial']);
  });

  it('completa has all modules', () => {
    const completa = PROFILE_PRESETS.find(p => p.id === 'completa');
    expect(completa?.modules).toEqual(['essencial', 'gestao', 'fiscal', 'techia']);
  });
});

describe('pricing.TRIAL_DAYS', () => {
  it('is 14 days', () => {
    expect(TRIAL_DAYS).toBe(14);
  });
});

describe('pricing.introPromo (promoção de entrada)', () => {
  it('cobra só a base no período: módulos adicionais grátis', () => {
    expect(introPromoTotal(['essencial'])).toBe(99.90);
    expect(introPromoTotal(['essencial', 'gestao', 'fiscal'])).toBe(99.90);
    expect(introPromoTotal(['essencial', 'gestao', 'fiscal', 'techia'])).toBe(99.90);
  });

  it('só indica desconto quando a combinação tem módulo adicional', () => {
    expect(INTRO_PROMO.active).toBe(true);
    expect(hasPromoDiscount(['essencial'])).toBe(false);
    expect(hasPromoDiscount(['essencial', 'gestao'])).toBe(true);
  });

  it('descreve o período', () => {
    expect(introPromoPeriod()).toBe('nos 3 primeiros meses');
    expect(introPromoPeriod(1)).toBe('no primeiro mês');
  });

  it('Gestão e Fiscal custam R$ 49,50', () => {
    expect(calculateTotal(['gestao'])).toBe(49.50);
    expect(calculateTotal(['fiscal'])).toBe(49.50);
  });
});

