import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Container } from './Container';

describe('<Container>', () => {
  it('renders children', () => {
    render(<Container>conteúdo</Container>);
    expect(screen.getByText('conteúdo')).toBeInTheDocument();
  });

  it('applies max-width and centering classes', () => {
    const { container } = render(<Container>x</Container>);
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain('max-w-');
    expect(div.className).toContain('mx-auto');
  });
});
