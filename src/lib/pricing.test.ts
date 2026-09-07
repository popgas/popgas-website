import { describe, it, expect } from 'vitest';
import {
  MODULES,
  TRIAL_DAYS,
  calculateTotal,
  buildSignupUrl,
  PROFILE_PRESETS,
} from './pricing';

describe('pricing.calculateTotal', () => {
  it('returns base price when only essencial selected', () => {
    expect(calculateTotal(['essencial'])).toBe(99.90);
  });

  it('sums modules correctly', () => {
    expect(calculateTotal(['essencial', 'gestao', 'fiscal'])).toBeCloseTo(199.70, 2);
  });

  it('total for full plan', () => {
    const total = calculateTotal(['essencial', 'gestao', 'fiscal', 'techia']);
    expect(total).toBeCloseTo(399.60, 2);
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
