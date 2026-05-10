import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionHeader } from './SectionHeader';

describe('<SectionHeader>', () => {
  it('renders eyebrow, title and subtitle', () => {
    render(
      <SectionHeader
        eyebrow="Modular by design"
        title="Comece simples."
        subtitle="Sem upgrade forçado."
      />
    );
    expect(screen.getByText('Modular by design')).toBeInTheDocument();
    expect(screen.getByText('Comece simples.')).toBeInTheDocument();
    expect(screen.getByText('Sem upgrade forçado.')).toBeInTheDocument();
  });

  it('omits eyebrow and subtitle when not provided', () => {
    render(<SectionHeader title="Apenas título" />);
    expect(screen.getByText('Apenas título')).toBeInTheDocument();
  });
});
