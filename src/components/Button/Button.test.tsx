/**
 * Button Component Tests
 *
 * Unit tests for the Button component
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../test/test-utils';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  describe('Rendering', () => {
    it('should render with children text', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('should render with default variant (text)', () => {
      render(<Button>Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('MuiButton-text');
    });

    it('should render with outlined variant', () => {
      render(<Button variant="outlined">Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('MuiButton-outlined');
    });

    it('should render with text variant', () => {
      render(<Button variant="text">Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('MuiButton-text');
    });
  });

  describe('Sizes', () => {
    it('should render small size', () => {
      render(<Button size="small">Small</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('MuiButton-sizeSmall');
    });

    it('should render medium size', () => {
      render(<Button size="medium">Medium</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('MuiButton-sizeMedium');
    });

    it('should render large size', () => {
      render(<Button size="large">Large</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('MuiButton-sizeLarge');
    });
  });

  describe('Colors', () => {
    it('should render primary color', () => {
      render(<Button color="primary">Primary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('MuiButton-colorPrimary');
    });

    it('should render secondary color', () => {
      render(<Button color="secondary">Secondary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('MuiButton-colorSecondary');
    });

    it('should render error color', () => {
      render(<Button color="error">Error</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('MuiButton-colorError');
    });

    it('should render inherit color', () => {
      render(<Button color="inherit">Inherit</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('MuiButton-colorInherit');
    });
  });

  describe('States', () => {
    it('should be enabled by default', () => {
      render(<Button>Enabled</Button>);
      const button = screen.getByRole('button');
      expect(button).not.toBeDisabled();
    });

    it('should be disabled when disabled prop is true', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('should have disabled class when disabled', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('Mui-disabled');
    });
  });

  describe('Interactions', () => {
    it('should call onClick handler when clicked', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole('button');

      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled', () => {
      const handleClick = vi.fn();

      render(
        <Button onClick={handleClick} disabled>
          Click me
        </Button>
      );
      const button = screen.getByRole('button');

      // Disabled buttons should not be clickable
      expect(button).toBeDisabled();
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should be keyboard accessible', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Press Enter</Button>);
      const button = screen.getByRole('button');

      button.focus();
      await user.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('should have button role', () => {
      render(<Button>Accessible</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should support aria-label', () => {
      render(<Button aria-label="Custom label">Button</Button>);
      expect(screen.getByLabelText('Custom label')).toBeInTheDocument();
    });

    it('should be properly disabled when disabled prop is true', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
  });

  describe('Ref forwarding', () => {
    it('should forward ref to button element', () => {
      const ref = vi.fn();
      render(<Button ref={ref}>Button</Button>);
      expect(ref).toHaveBeenCalled();
    });
  });

  describe('Full width', () => {
    it('should take full width when fullWidth prop is true', () => {
      render(<Button fullWidth>Full Width</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('MuiButton-fullWidth');
    });
  });
});
