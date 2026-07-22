import type { Meta, StoryObj } from '@storybook/react-vite';

import { Stack } from './Stack';
import { Button } from '../Button';
import { extractExamples } from '../docs/extractExamples';
import raw from './Stack.stories.tsx?raw';

const meta: Meta<typeof Stack> = {
  // Hidden `Internal/` root + `!dev` so the sidebar only shows the standalone
  // "Layout/Stack" MDX docs page (same pattern as Button.stories.tsx).
  title: 'Internal/Stack',
  component: Stack,
  tags: ['!dev'],
  // PascalCase exports are stories; camelCase exports below are typechecked
  // docs example source (see Button.stories.tsx for the full rationale).
  includeStories: /^[A-Z]/,
  parameters: { layout: 'padded' },
  args: {
    direction: 'vertical', gap: 3, reversed: false,
  },
  argTypes: {
    direction: { control: 'inline-radio', options: ['vertical', 'horizontal'] },
    gap: {
      control: {
        type: 'number', min: 0, max: 6, step: 0.5,
      },
    },
    reversed: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Playground: Story = {
  render: (args) => (
    <Stack {...args}>
      <Button variant="primary">first button</Button>
      <Button variant="primary">second button</Button>
      <Button variant="primary">third button</Button>
    </Stack>
  ),
};

/*
 * Docs live examples — typechecked TSX, source-extracted for react-live.
 * camelCase so `includeStories` excludes them from Storybook. See
 * Button.stories.tsx for the full rationale.
 */

export const vertical = (
  <Stack gap={3}>
    <Button>first button</Button>
    <Button>second button</Button>
    <Button>third button</Button>
  </Stack>
);

export const horizontal = (
  <Stack direction="horizontal" gap={3}>
    <div style={{ border: '1px solid var(--pgn-color-border)', padding: 'var(--pgn-spacing-spacer-2)' }}>first block</div>
    <div style={{ border: '1px solid var(--pgn-color-border)', padding: 'var(--pgn-spacing-spacer-2)' }}>second block</div>
    <div style={{ border: '1px solid var(--pgn-color-border)', padding: 'var(--pgn-spacing-spacer-2)' }}>third block</div>
  </Stack>
);

export const reversedVertical = (
  <Stack gap={3} reversed>
    <Button>first button</Button>
    <Button>second button</Button>
    <Button>third button</Button>
  </Stack>
);

export const reversedHorizontal = (
  <Stack direction="horizontal" gap={3} reversed>
    <div style={{ border: '1px solid var(--pgn-color-border)', padding: 'var(--pgn-spacing-spacer-2)' }}>first block</div>
    <div style={{ border: '1px solid var(--pgn-color-border)', padding: 'var(--pgn-spacing-spacer-2)' }}>second block</div>
    <div style={{ border: '1px solid var(--pgn-color-border)', padding: 'var(--pgn-spacing-spacer-2)' }}>third block</div>
  </Stack>
);

/** Editable source strings for react-live, extracted verbatim from this file. */
export const examples = extractExamples(raw);
