import { beforeEach, describe, expect, it } from 'vitest';
import {
  ATTRIBUTION_PARAMS,
  appendAttribution,
  captureAttributionFromLocation,
  getStoredAttribution,
  parseAttribution,
} from './attribution';

const SIGNUP = 'https://erp.popgas.com.br/signup?modules=base&billing=monthly&utm_source=site&utm_campaign=home_hero';

describe('attribution.parseAttribution', () => {
  it('keeps only known params', () => {
    const parsed = parseAttribution('?utm_source=facebook&utm_campaign=lanc&fbclid=IwAR1&foo=bar&ad_id=9');
    expect(parsed).toEqual({ utm_source: 'facebook', utm_campaign: 'lanc', fbclid: 'IwAR1', ad_id: '9' });
  });

  it('lists the 10 supported params', () => {
    expect(ATTRIBUTION_PARAMS).toHaveLength(10);
    expect(ATTRIBUTION_PARAMS).toContain('placement');
  });
});

describe('attribution.captureAttributionFromLocation', () => {
  beforeEach(() => window.sessionStorage.clear());

  it('stores params with landing_url and referrer on first visit', () => {
    const stored = captureAttributionFromLocation(
      { search: '?utm_source=facebook&utm_medium=paid_social', href: 'https://www.popgas.com.br/?utm_source=facebook&utm_medium=paid_social' },
      'https://l.facebook.com/',
    );

    expect(stored).toEqual({
      utm_source: 'facebook',
      utm_medium: 'paid_social',
      landing_url: 'https://www.popgas.com.br/?utm_source=facebook&utm_medium=paid_social',
      referrer: 'https://l.facebook.com/',
    });
    expect(getStoredAttribution()?.utm_source).toBe('facebook');
  });

  it('returns null and stores nothing without campaign params', () => {
    expect(captureAttributionFromLocation({ search: '', href: 'https://www.popgas.com.br/' }, '')).toBeNull();
    expect(getStoredAttribution()).toBeNull();
  });

  it('first touch wins inside the session', () => {
    captureAttributionFromLocation({ search: '?utm_source=facebook', href: 'https://www.popgas.com.br/?utm_source=facebook' }, '');
    const second = captureAttributionFromLocation({ search: '?utm_source=google', href: 'https://www.popgas.com.br/planos?utm_source=google' }, '');

    expect(second?.utm_source).toBe('facebook');
    expect(getStoredAttribution()?.utm_source).toBe('facebook');
  });
});

describe('attribution.appendAttribution', () => {
  it('returns the url untouched without attribution', () => {
    expect(appendAttribution(SIGNUP, null)).toBe(SIGNUP);
    expect(appendAttribution(SIGNUP, {})).toBe(SIGNUP);
  });

  it('campaign params override the site defaults and CTA position moves to utm_content', () => {
    const url = new URL(appendAttribution(SIGNUP, {
      utm_source: 'facebook',
      utm_medium: 'paid_social',
      utm_campaign: 'lancamento_erp',
      campaign_id: '12',
      adset_id: '13',
      ad_id: '14',
      placement: 'feed',
      fbclid: 'IwAR1',
      landing_url: 'https://www.popgas.com.br/',
      referrer: '',
    }));

    expect(url.searchParams.get('utm_source')).toBe('facebook');
    expect(url.searchParams.get('utm_medium')).toBe('paid_social');
    expect(url.searchParams.get('utm_campaign')).toBe('lancamento_erp');
    expect(url.searchParams.get('utm_content')).toBe('home_hero');
    expect(url.searchParams.get('campaign_id')).toBe('12');
    expect(url.searchParams.get('adset_id')).toBe('13');
    expect(url.searchParams.get('ad_id')).toBe('14');
    expect(url.searchParams.get('placement')).toBe('feed');
    expect(url.searchParams.get('fbclid')).toBe('IwAR1');
    expect(url.searchParams.get('modules')).toBe('base');
    expect(url.searchParams.get('billing')).toBe('monthly');
    expect(url.searchParams.has('landing_url')).toBe(false);
    expect(url.searchParams.has('referrer')).toBe(false);
  });

  it('keeps inbound utm_content when present', () => {
    const url = new URL(appendAttribution(SIGNUP, { utm_campaign: 'x', utm_content: 'criativo_a' }));
    expect(url.searchParams.get('utm_content')).toBe('criativo_a');
  });

  it('keeps site utm_campaign when the inbound attribution has only click ids', () => {
    const url = new URL(appendAttribution(SIGNUP, { fbclid: 'IwAR1' }));
    expect(url.searchParams.get('utm_campaign')).toBe('home_hero');
    expect(url.searchParams.get('utm_source')).toBe('site');
    expect(url.searchParams.get('fbclid')).toBe('IwAR1');
  });
});
