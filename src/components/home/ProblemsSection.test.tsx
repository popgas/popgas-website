// src/components/home/ProblemsSection.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProblemsSection } from './ProblemsSection';

describe('<ProblemsSection>', () => {
  it('renders 4 problem cards', () => {
    render(<ProblemsSection />);
    expect(screen.getByText(/Caixa fechando atrasado/i)).toBeInTheDocument();
    expect(screen.getByText(/Cliente esperando atendente/i)).toBeInTheDocument();
    expect(screen.getByText(/NF-e dando erro/i)).toBeInTheDocument();
    expect(screen.getByText(/Estoque desencontrado/i)).toBeInTheDocument();
  });
});
