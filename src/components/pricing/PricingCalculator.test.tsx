// src/components/pricing/PricingCalculator.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PricingCalculator } from './PricingCalculator';

describe('<PricingCalculator>', () => {
  it('starts with only essencial selected and shows R$ 99,90', () => {
    render(<PricingCalculator />);
    expect(screen.getByText(/R\$ 99,90/)).toBeInTheDocument();
  });

  it('allows toggling Gestão module and updates total', async () => {
    const user = userEvent.setup();
    render(<PricingCalculator />);
    const gestaoToggle = screen.getByLabelText(/Gestão/i);
    await user.click(gestaoToggle);
    expect(screen.getByText(/R\$ 149,80/)).toBeInTheDocument();
  });

  it('cannot deselect the Essencial (base plan)', async () => {
    const user = userEvent.setup();
    render(<PricingCalculator />);
    const essencialToggle = screen.getByLabelText(/Essencial/i);
    expect(essencialToggle).toBeDisabled();
  });

  it('toggle annual applies 20% discount', async () => {
    const user = userEvent.setup();
    render(<PricingCalculator />);
    const annualToggle = screen.getByRole('switch', { name: /anual/i });
    await user.click(annualToggle);
    expect(screen.getByText(/R\$ 79,92/)).toBeInTheDocument();
  });

  it('renders signup CTA with correct query string', () => {
    render(<PricingCalculator />);
    const cta = screen.getByRole('link', { name: /começar com este combo/i });
    const href = cta.getAttribute('href') ?? '';
    expect(href).toContain('app.popgas.com.br/signup');
    expect(href).toContain('modules=base');
    expect(href).toContain('billing=monthly');
  });
});
