import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';
import { Stack } from '../Stack';
import type { BaseVariant } from './types';
import { LivePlayground } from '../docs/LivePlayground';
import {
  Add, Remove, ArrowBack, ArrowDropDown, Highlight,
} from '../docs/scope';
import { extractExamples } from '../docs/extractExamples';
import raw from './Button.stories.tsx?raw';

const BASE_VARIANTS: BaseVariant[] = [
  'primary', 'secondary', 'tertiary', 'brand', 'success',
  'danger', 'warning', 'info', 'dark', 'light', 'link',
];

const meta: Meta<typeof Button> = {
  // Kept under a separate, fully-hidden root so it does NOT share a title with
  // the `Buttonlike/Button` docs page — that keeps the MDX an unattached, single
  // sidebar leaf (no "Docs" sub-node). The story is the raw material for that
  // page, hidden from the sidebar via `!dev` but still referenceable through
  // `<Story of>` / `<Controls of>`.
  title: 'Internal/Button',
  component: Button,
  tags: ['!dev'],
  // Only PascalCase exports are Storybook stories. The camelCase exports at the
  // bottom of this file (`coreButtons`, … and the `examples` source map) are the
  // docs' live-example source — real TSX so `tsc` typechecks them — not stories.
  includeStories: /^[A-Z]/,
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

/*
 * ---------------------------------------------------------------------------
 * Docs live examples.
 *
 * Authored as real TSX so TypeScript typechecks every prop against the Button
 * types (a bad `variant`, a removed prop, or a mistyped icon fails
 * `npm run type-check`). Their verbatim source is extracted (see
 * `extractExamples`) and fed to react-live, so the docs stay editable.
 *
 * These are camelCase on purpose — `includeStories` above keeps Storybook from
 * treating them as stories. Each must be a single JSX expression wrapped in
 * `( … )` (react-live evaluates one; the extractor keys off that shape).
 * ---------------------------------------------------------------------------
 */

export const coreButtons = (
  <Stack gap={2} direction="horizontal">
    <Button variant="brand">Brand</Button>
    <Button variant="outline-brand">Outline Brand</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="outline-primary">Outline Primary</Button>
    <Button variant="tertiary">Tertiary</Button>
  </Stack>
);

export const coreButtonsInverse = (
  <Stack
    gap={2}
    direction="horizontal"
    style={{ backgroundColor: 'var(--pgn-color-dark-700)', padding: '1rem' }}
  >
    <Button variant="inverse-brand">Brand</Button>
    <Button variant="inverse-outline-brand">Outline Brand</Button>
    <Button variant="inverse-primary">Primary</Button>
    <Button variant="inverse-outline-primary">Outline Primary</Button>
    <Button variant="inverse-tertiary">Tertiary</Button>
  </Stack>
);

export const utilityButtons = (
  <>
    <Stack gap={2} direction="horizontal" style={{ marginBottom: '0.5rem' }}>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="outline-success">Success</Button>
      <Button variant="outline-danger">Danger</Button>
    </Stack>
    <Stack gap={2} direction="horizontal">
      <Button variant="link">Link</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="outline-light">Light</Button>
      <Button variant="outline-dark">Dark</Button>
    </Stack>
  </>
);

export const sizes = (
  <>
    <Stack gap={2} direction="horizontal" style={{ marginBottom: '0.5rem' }}>
      <Button variant="primary" size="lg">Large button</Button>
      <Button variant="outline-primary" size="lg">Large button</Button>
    </Stack>
    <Stack gap={2} direction="horizontal" style={{ marginBottom: '0.5rem' }}>
      <Button variant="primary" size="sm">Small button</Button>
      <Button variant="outline-primary" size="sm">Small button</Button>
    </Stack>
    <Stack gap={2} direction="horizontal">
      <Button variant="link" size="inline">Inline button</Button>
      <Button variant="link" size="inline">Inline button</Button>
    </Stack>
  </>
);

export const inlineSize = (
  <p>
    <span style={{ marginRight: '0.25rem' }}>2 items selected.</span>
    <span style={{ marginRight: '0.25rem' }}><Button variant="link" size="inline">Select all</Button></span>
    <Button variant="link" size="inline">Clear</Button>
  </p>
);

export const blockButtons = (
  <>
    <Button variant="primary" size="lg" block>Block level button</Button>
    <Button variant="secondary" size="lg" block>Block level button</Button>
  </>
);

export const disabled = (
  <Stack gap={2} direction="horizontal">
    <Button variant="primary" disabled>Primary disabled</Button>
    <Button variant="secondary" disabled>Secondary disabled</Button>
    <Button as="a" href="https://edx.org" disabled>Link disabled</Button>
  </Stack>
);

export const emptyHref = (
  <Stack gap={2} direction="horizontal">
    <Button as="a" disabled>No href</Button>
    <Button as="a" href="" disabled>Empty string href</Button>
  </Stack>
);

export const withIcons = (
  <Stack gap={2} direction="horizontal">
    <Button variant="brand" iconBefore={ArrowBack}>Brand</Button>
    <Button variant="outline-brand" iconAfter={ArrowDropDown}>Outline Brand</Button>
    <Button variant="primary" iconBefore={Remove} iconAfter={Add}>Primary</Button>
    <Button variant="outline-primary" iconBefore={Highlight}>Outline Primary</Button>
    <Button variant="tertiary" iconAfter={Add}>Tertiary</Button>
  </Stack>
);

/** Editable source strings for react-live, extracted verbatim from this file. */
export const examples = extractExamples(raw);
