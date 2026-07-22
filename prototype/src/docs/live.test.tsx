import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { LiveExample } from './LiveExample';
import { LivePlayground, generateCode } from './LivePlayground';

// react-live computes the preview element in an effect, so the rendered Button
// appears after the initial commit — hence the async `findBy*` queries.

describe('LiveExample', () => {
  it('evaluates the code string and renders a real Button in the preview', async () => {
    render(<LiveExample code={'<Button variant="primary">Hi there</Button>'} />);
    expect(await screen.findByRole('button', { name: 'Hi there' })).toBeInTheDocument();
  });

  it('resolves components and icons from scope', async () => {
    render(<LiveExample code={'<Button iconBefore={DotIcon}>With icon</Button>'} />);
    expect(await screen.findByRole('button', { name: 'With icon' })).toBeInTheDocument();
  });
});

describe('LivePlayground', () => {
  it('generates JSX from args and renders the matching Button', async () => {
    render(<LivePlayground variant="danger" size="lg" disabled>Go</LivePlayground>);
    const btn = await screen.findByRole('button', { name: 'Go' });
    expect(btn).toHaveClass('btn', 'btn-danger');
  });

});

describe('generateCode (Controls → JSX)', () => {
  it('serializes variant plus a non-default size and label', () => {
    expect(generateCode({ variant: 'success', size: 'sm', children: 'Save' }))
      .toBe('<Button variant="success" size="sm">Save</Button>');
  });

  it('omits the size attribute for the default md size', () => {
    expect(generateCode({ variant: 'primary', size: 'md', children: 'Default' }))
      .toBe('<Button variant="primary">Default</Button>');
  });

  it('includes boolean flags and falls back to a default label', () => {
    expect(generateCode({ variant: 'danger', disabled: true, block: true }))
      .toBe('<Button variant="danger" disabled block>Button</Button>');
  });
});
