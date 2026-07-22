import type { Meta, StoryObj } from '@storybook/react-vite';

import { Stack } from './Stack';
import { Button } from '../Button';

const meta: Meta<typeof Stack> = {
  // Hidden `Internal/` root + `!dev` so the sidebar only shows the standalone
  // "Layout/Stack" MDX docs page (same pattern as Button.stories.tsx).
  title: 'Internal/Stack',
  component: Stack,
  tags: ['!dev'],
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
