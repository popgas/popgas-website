// src/components/home/Hero.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import { DemoVideoSection } from './DemoVideoSection';

describe('<Hero>', () => {
  it('renders the headline', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/O ERP que .*sua revenda\./);
  });

  it('renders signup and WhatsApp CTAs', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /começar grátis/i })).toHaveAttribute(
      'href',
      expect.stringContaining('/signup'),
    );
    expect(screen.getByRole('link', { name: /fale conosco via whatsapp/i })).toHaveAttribute(
      'href',
      expect.stringContaining('wa.me/553432386577'),
    );
  });

  it('renders the WhatsApp chat demo and the "test our AI" button', () => {
    render(<Hero />);
    expect(screen.getByRole('img', { name: /simulação de conversa no whatsapp/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /teste você mesmo nossa ia/i })).toBeInTheDocument();
  });
});

describe('<DemoVideoSection>', () => {
  it('links the robot banner to the demo video', () => {
    render(<DemoVideoSection />);
    const demo = screen.getByRole('link', { name: /assistir demonstração/i });
    expect(demo).toHaveAttribute('href', expect.stringContaining('youtube.com'));
    expect(demo).toContainElement(screen.getByAltText(/IA no WhatsApp/i));
  });
});
