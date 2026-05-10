import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('<Footer>', () => {
  it('renders 4 columns and CNPJ', () => {
    render(<Footer />);
    expect(screen.getByText(/Produto/)).toBeInTheDocument();
    expect(screen.getByText(/Empresa/)).toBeInTheDocument();
    expect(screen.getByText(/Suporte/)).toBeInTheDocument();
    expect(screen.getByText(/Legal/)).toBeInTheDocument();
    expect(screen.getByText(/10\.262\.307\/0001-14/)).toBeInTheDocument();
  });

  it('links to status page', () => {
    render(<Footer />);
    const statusLinks = screen.getAllByRole('link', { name: /status/i });
    expect(statusLinks[0]).toHaveAttribute('href', 'https://status.popgas.com.br');
  });

  it('links to docs', () => {
    render(<Footer />);
    const docsLink = screen.getByRole('link', { name: /central de ajuda/i });
    expect(docsLink).toHaveAttribute('href', 'https://erp.popgas.com.br/docs');
  });
});
