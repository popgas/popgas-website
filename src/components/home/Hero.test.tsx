// src/components/home/Hero.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('<Hero>', () => {
  it('renders headline with "automatiza"', () => {
    render(<Hero />);
    expect(screen.getByText(/automatiza/i)).toBeInTheDocument();
  });

  it('renders the WhatsApp contact CTA', () => {
    render(<Hero />);
    expect(screen.getByText(/prefere conversar antes de testar/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /fale conosco via whatsapp/i })).toHaveAttribute(
      'href',
      expect.stringContaining('wa.me/553432387777'),
    );
  });

  it('merges the demo video into the main image', () => {
    render(<Hero />);
    const demo = screen.getByRole('link', { name: /assistir demonstração/i });
    expect(demo).toHaveAttribute('href', expect.stringContaining('youtube.com'));
    expect(demo).toContainElement(screen.getByAltText(/IA no WhatsApp/i));
  });
});
