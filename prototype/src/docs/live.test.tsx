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
  it('renders the provided code string as a live preview', async () => {
    render(<LivePlayground code={'<Button variant="danger">Go</Button>'} />);
    const btn = await screen.findByRole('button', { name: 'Go' });
    expect(btn).toHaveClass('btn', 'btn-danger');
  });
});

describe('generateCode (Controls → JSX)', () => {
  it('serializes props, omitting defaults, with a string body from children', () => {
    expect(generateCode('Button', { variant: 'success', size: 'sm', children: 'Save' }, {
      defaults: { size: 'md' },
    })).toBe('<Button variant="success" size="sm">Save</Button>');
  });

  it('omits a prop whose value matches the supplied default', () => {
    expect(generateCode('Button', { variant: 'primary', size: 'md', children: 'Default' }, {
      defaults: { size: 'md' },
    })).toBe('<Button variant="primary">Default</Button>');
  });

  it('renders booleans bare and serializes numbers with braces', () => {
    expect(generateCode('Stack', { direction: 'vertical', gap: 3, reversed: true }, {
      defaults: { direction: 'vertical' },
      children: '<Button>a</Button>',
    })).toBe('<Stack gap={3} reversed><Button>a</Button></Stack>');
  });

  it('formats multi-line children as an indented block', () => {
    expect(generateCode('ButtonGroup', { 'aria-label': 'X' }, {
      children: '<Button>a</Button>\n<Button>b</Button>',
    })).toBe('<ButtonGroup aria-label="X">\n  <Button>a</Button>\n  <Button>b</Button>\n</ButtonGroup>');
  });

  it('self-closes when there is no body', () => {
    expect(generateCode('Button', { variant: 'danger', disabled: true }))
      .toBe('<Button variant="danger" disabled />');
  });
});
