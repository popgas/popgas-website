import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';

describe('<Header>', () => {
  it('renders logo with PopGás alt text', () => {
    render(<Header />);
    expect(screen.getByAltText(/PopGás/i)).toBeInTheDocument();
  });

  it('renders main navigation with "Teste nossa IA" in place of Contato', () => {
    render(<Header />);
    expect(screen.getAllByRole('link', { name: /recursos/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /^planos$/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole('button', { name: /teste nossa ia/i })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /contato/i })).not.toBeInTheDocument();
  });

  it('opens the "Começar grátis" popover with signup and login options', async () => {
    render(<Header />);
    const trigger = screen.getByRole('button', { name: /começar grátis/i });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('link', { name: /cadastrar e testar de graça/i })).toHaveAttribute(
      'href',
      expect.stringContaining('erp.popgas.com.br/signup'),
    );
    expect(screen.getByRole('link', { name: /acessar minha conta/i })).toHaveAttribute(
      'href',
      expect.stringContaining('erp.popgas.com.br/login'),
    );
  });

  it('opens the AI chat dialog from "Teste nossa IA"', async () => {
    render(<Header />);
    await userEvent.click(screen.getByRole('button', { name: /teste nossa ia/i }));
    expect(screen.getByRole('dialog', { name: /teste nossa ia/i })).toBeInTheDocument();
    expect(screen.getByTitle(/chat de demonstração/i)).toHaveAttribute('src', expect.stringContaining('popgas.chat'));
  });
});
