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
    // /99,90/ matches both "99,90" and "199,90", so use getAllByText
    expect(screen.getAllByText(/99,90/).length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/199,90/)).toBeInTheDocument();
  });

  it('marks Tech & IA as premium', () => {
    render(<ModulesGrid />);
    expect(screen.getByText(/PREMIUM/i)).toBeInTheDocument();
  });
});
