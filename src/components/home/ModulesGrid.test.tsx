// src/components/home/ModulesGrid.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ModulesGrid } from './ModulesGrid';

describe('<ModulesGrid>', () => {
  it('renders 4 module cards', () => {
    render(<ModulesGrid />);
    expect(screen.getByText('Essencial')).toBeInTheDocument();
    expect(screen.getByText('Gestão')).toBeInTheDocument();
    expect(screen.getByText('Fiscal')).toBeInTheDocument();
    expect(screen.getByText('Tech & IA')).toBeInTheDocument();
  });

  it('shows correct prices', () => {
    render(<ModulesGrid />);
    // Base aparece na linha do módulo e no aviso da promoção; Gestão e Fiscal têm o mesmo preço.
    expect(screen.getAllByText(/99,90/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/49,50/)).toHaveLength(2);
    expect(screen.getByText(/199,00/)).toBeInTheDocument();
    expect(screen.queryByText(/199,90|49,90/)).not.toBeInTheDocument();
  });

  it('marks Tech & IA as premium', () => {
    render(<ModulesGrid />);
    expect(screen.getByText(/PREMIUM/i)).toBeInTheDocument();
  });
});
