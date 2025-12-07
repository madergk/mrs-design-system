/**
 * Button Component Tests
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders with variant prop', () => {
    const { container } = render(<Button variant="contained">Contained</Button>);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with color prop', () => {
    const { container } = render(<Button color="primary">Primary</Button>);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with size prop', () => {
    const { container } = render(<Button size="large">Large</Button>);
    expect(container.firstChild).toBeInTheDocument();
  });
});
