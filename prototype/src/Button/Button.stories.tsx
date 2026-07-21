import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';
import { ButtonToolbar } from './ButtonToolbar';
import type { BaseVariant } from './types';
import { LivePlayground } from '../docs/LivePlayground';

const BASE_VARIANTS: BaseVariant[] = [
  'primary', 'secondary', 'tertiary', 'brand', 'success',
  'danger', 'warning', 'info', 'dark', 'light', 'link',
];

// A tiny inline icon so stories stay dependency-free.
function DotIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <circle cx="8" cy="8" r="5" />
    </svg>
  );
}

const meta: Meta<typeof Button> = {
  // Kept under a separate, fully-hidden root so it does NOT share a title with
  // the `Buttonlike/Button` docs page — that keeps the MDX an unattached, single
  // sidebar leaf (no "Docs" sub-node). Stories are the raw material for that
  // page, hidden from the sidebar via `!dev` but still referenceable through
  // `<Story of>` / `<Controls of>`.
  title: 'Internal/Button',
  component: Button,
  tags: ['!dev'],
  parameters: { layout: 'padded' },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        ...BASE_VARIANTS,
        ...BASE_VARIANTS.map((v) => `outline-${v}`),
        ...BASE_VARIANTS.map((v) => `inverse-${v}`),
      ],
    },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg', 'inline'] },
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    block: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Live, editable example whose JSX is generated from the Controls below. Changing
 * a control rewrites the editor; you can also edit the JSX directly.
 */
export const Playground: Story = {
  render: (args) => <LivePlayground {...args} />,
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
      {BASE_VARIANTS.map((v) => (
        <Button key={v} variant={v}>{v}</Button>
      ))}
    </div>
  ),
};

export const OutlineAndInverse: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '.75rem' }}>
      <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
        {BASE_VARIANTS.filter((v) => v !== 'link').map((v) => (
          <Button key={v} variant={`outline-${v}` as const}>{`outline-${v}`}</Button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', background: '#0A3055', padding: '1rem' }}>
        {BASE_VARIANTS.filter((v) => v !== 'link').map((v) => (
          <Button key={v} variant={`inverse-${v}` as const}>{`inverse-${v}`}</Button>
        ))}
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <span>
        Text with an
        {' '}
        <Button size="inline" variant="link">inline</Button>
        {' '}
        button.
      </span>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '.75rem' }}>
      <Button iconBefore={DotIcon}>Icon before</Button>
      <Button iconAfter={DotIcon}>Icon after</Button>
      <Button iconBefore={DotIcon} iconAfter={DotIcon}>Both</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
};

/** Demonstrates polymorphism: rendered as an anchor, still keyboard-accessible
 *  and correctly disabled via React Aria (no `pointer-events` hack needed). */
export const AsAnchor: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '.75rem' }}>
      <Button as="a" href="https://openedx.org" variant="primary">Link that looks like a button</Button>
      <Button as="a" variant="outline-primary" disabled>Disabled anchor</Button>
    </div>
  ),
};

export const Groups: Story = {
  render: () => (
    <ButtonToolbar aria-label="Formatting">
      <ButtonGroup aria-label="Text style" size="sm">
        <Button variant="outline-primary">Bold</Button>
        <Button variant="outline-primary">Italic</Button>
        <Button variant="outline-primary">Underline</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Alignment">
        <Button variant="outline-secondary">Left</Button>
        <Button variant="outline-secondary">Center</Button>
        <Button variant="outline-secondary">Right</Button>
      </ButtonGroup>
    </ButtonToolbar>
  ),
};
