import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SignupLink } from './SignupLink';

const BASE = 'https://erp.popgas.com.br/signup?modules=base&billing=monthly&utm_source=site&utm_campaign=home_hero';

describe('<SignupLink>', () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    window.history.replaceState({}, '', '/');
  });

  it('renders the base href when there is no stored attribution', () => {
    render(<SignupLink href={BASE} className="cta">Começar grátis →</SignupLink>);
    const link = screen.getByRole('link', { name: /começar grátis/i });
    expect(link).toHaveAttribute('href', BASE);
    expect(link).toHaveClass('cta');
  });

  it('merges stored attribution into the href', () => {
    window.sessionStorage.setItem(
      'popgas_attribution',
      JSON.stringify({ utm_source: 'facebook', utm_campaign: 'lanc', fbclid: 'IwAR1' }),
    );

    render(<SignupLink href={BASE}>Começar grátis →</SignupLink>);
    const href = screen.getByRole('link', { name: /começar grátis/i }).getAttribute('href') ?? '';
    const url = new URL(href);

    expect(url.searchParams.get('utm_source')).toBe('facebook');
    expect(url.searchParams.get('utm_campaign')).toBe('lanc');
    expect(url.searchParams.get('utm_content')).toBe('home_hero');
    expect(url.searchParams.get('fbclid')).toBe('IwAR1');
    expect(url.searchParams.get('modules')).toBe('base');
  });

  it('captures attribution from the current page before resolving the href', () => {
    window.history.replaceState(
      {},
      '',
      '/?utm_source=facebook&utm_campaign=lancamento&utm_content=criativo_a&fbclid=IwAR2',
    );

    render(<SignupLink href={BASE}>Começar grátis →</SignupLink>);
    const href = screen.getByRole('link', { name: /começar grátis/i }).getAttribute('href') ?? '';
    const url = new URL(href);

    expect(url.searchParams.get('utm_source')).toBe('facebook');
    expect(url.searchParams.get('utm_campaign')).toBe('lancamento');
    expect(url.searchParams.get('utm_content')).toBe('criativo_a');
    expect(url.searchParams.get('fbclid')).toBe('IwAR2');
  });
});
