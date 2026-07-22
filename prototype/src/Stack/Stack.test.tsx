import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Stack } from './Stack';

describe('Stack', () => {
  it('renders a vertical stack by default', () => {
    render(<Stack data-testid="stack">Content</Stack>);
    const stack = screen.getByTestId('stack');
    expect(stack.tagName).toBe('DIV');
    expect(stack.className).toMatch(/vstack/);
  });

  it('renders a horizontal stack when direction is horizontal', () => {
    render(<Stack data-testid="stack" direction="horizontal">Content</Stack>);
    expect(screen.getByTestId('stack').className).toMatch(/hstack/);
  });

  it('resolves the gap to the matching spacer token', () => {
    render(<Stack data-testid="stack" gap={3}>Content</Stack>);
    // Gap is token-driven: the component sets --pgn-stack-gap to the spacer var.
    expect(screen.getByTestId('stack').style.getPropertyValue('--pgn-stack-gap'))
      .toBe('var(--pgn-spacing-spacer-3)');
  });

  it('maps half-step gaps onto the spacer scale (1.5 -> 1-5)', () => {
    render(<Stack data-testid="stack" gap={1.5}>Content</Stack>);
    expect(screen.getByTestId('stack').style.getPropertyValue('--pgn-stack-gap'))
      .toBe('var(--pgn-spacing-spacer-1-5)');
  });

  it('applies the reversed modifier', () => {
    render(<Stack data-testid="stack" reversed>Content</Stack>);
    expect(screen.getByTestId('stack').className).toMatch(/reversed/);
  });

  it('forwards className and DOM attributes', () => {
    render(<Stack data-testid="stack" className="extra" aria-label="things">Content</Stack>);
    const stack = screen.getByTestId('stack');
    expect(stack.className).toContain('extra');
    expect(stack).toHaveAttribute('aria-label', 'things');
  });

  it('merges a caller-supplied style with the gap variable', () => {
    render(<Stack data-testid="stack" gap={2} style={{ marginTop: '1rem' }}>Content</Stack>);
    const stack = screen.getByTestId('stack');
    expect(stack.style.marginTop).toBe('1rem');
    expect(stack.style.getPropertyValue('--pgn-stack-gap')).toBe('var(--pgn-spacing-spacer-2)');
  });

  it('forwards a ref to the underlying element', () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<Stack ref={ref}>Content</Stack>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
