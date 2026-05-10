import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('<Header>', () => {
  it('renders logo with PopGás alt text', () => {
    render(<Header />);
    expect(screen.getByAltText(/PopGás/i)).toBeInTheDocument();
  });

  it('renders main navigation links', () => {
    render(<Header />);
    expect(screen.getAllByRole('link', { name: /recursos/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /^planos$/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /blog/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /contato/i }).length).toBeGreaterThan(0);
  });

  it('renders CTAs (Entrar + Começar grátis)', () => {
    render(<Header />);
    const entrarLinks = screen.getAllByRole('link', { name: /entrar/i });
    const ctaLinks = screen.getAllByRole('link', { name: /começar grátis/i });
    expect(entrarLinks[0]).toHaveAttribute('href', expect.stringContaining('app.popgas.com.br/login'));
    expect(ctaLinks[0]).toHaveAttribute('href', expect.stringContaining('app.popgas.com.br/signup'));
  });
});
