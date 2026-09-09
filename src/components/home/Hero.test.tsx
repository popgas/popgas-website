// src/components/home/Hero.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('<Hero>', () => {
  it('renders headline with "automatiza"', () => {
    render(<Hero />);
    expect(screen.getByText(/automatiza/i)).toBeInTheDocument();
  });

  it('renders both CTAs', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /começar grátis/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ver planos/i })).toBeInTheDocument();
  });

  it('renders social proof', () => {
    render(<Hero />);
    expect(screen.getByText(/revenda real/)).toBeInTheDocument();
  });
});
