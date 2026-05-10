// src/components/pricing/PlanProfileChips.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PlanProfileChips } from './PlanProfileChips';

describe('<PlanProfileChips>', () => {
  it('renders 4 chips', () => {
    render(<PlanProfileChips selectedId={null} onSelect={() => {}} />);
    expect(screen.getByText(/Iniciante/)).toBeInTheDocument();
    expect(screen.getByText(/Gestão Administrativa/)).toBeInTheDocument();
    expect(screen.getByText(/Foco em Automação/)).toBeInTheDocument();
    expect(screen.getByText(/Plataforma Completa/)).toBeInTheDocument();
  });

  it('calls onSelect when clicked', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<PlanProfileChips selectedId={null} onSelect={onSelect} />);
    await user.click(screen.getByText(/Iniciante/));
    expect(onSelect).toHaveBeenCalledWith('iniciante');
  });

  it('marks selected chip', () => {
    render(<PlanProfileChips selectedId="completa" onSelect={() => {}} />);
    const completa = screen.getByText(/Plataforma Completa/).closest('button');
    expect(completa?.getAttribute('aria-pressed')).toBe('true');
  });
});
