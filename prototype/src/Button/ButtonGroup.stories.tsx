import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  // Separate hidden root — see the note in Button.stories.tsx.
  title: 'Internal/ButtonGroup',
  component: ButtonGroup,
  tags: ['!dev'],
  parameters: { layout: 'padded' },
  args: { size: 'md', vertical: false },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg', 'inline'] },
    vertical: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args} aria-label="Text style">
      <Button variant="outline-primary">Bold</Button>
      <Button variant="outline-primary">Italic</Button>
      <Button variant="outline-primary">Underline</Button>
    </ButtonGroup>
  ),
};
