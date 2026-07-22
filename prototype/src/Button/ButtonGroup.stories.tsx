import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';
import { ButtonToolbar } from './ButtonToolbar';
import { extractExamples } from '../docs/extractExamples';
import raw from './ButtonGroup.stories.tsx?raw';

const meta: Meta<typeof ButtonGroup> = {
  // Separate hidden root — see the note in Button.stories.tsx.
  title: 'Internal/ButtonGroup',
  component: ButtonGroup,
  tags: ['!dev'],
  // PascalCase exports are stories; camelCase exports below are typechecked
  // docs example source (see Button.stories.tsx for the full rationale).
  includeStories: /^[A-Z]/,
  parameters: { layout: 'padded' },
  args: { size: 'md', vertical: false },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg', 'inline'] },
    vertical: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Playground: Story = {
  render: (args) => (
    <ButtonGroup {...args} aria-label="Text style">
      <Button variant="outline-primary">Bold</Button>
      <Button variant="outline-primary">Italic</Button>
      <Button variant="outline-primary">Underline</Button>
    </ButtonGroup>
  ),
};

/*
 * Docs live examples — typechecked TSX, source-extracted for react-live.
 * camelCase so `includeStories` excludes them from Storybook. See
 * Button.stories.tsx for the full rationale.
 */

export const sizes = (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
    <ButtonGroup size="sm" aria-label="Small">
      <Button variant="outline-primary">One</Button>
      <Button variant="outline-primary">Two</Button>
    </ButtonGroup>
    <ButtonGroup size="lg" aria-label="Large">
      <Button variant="outline-primary">One</Button>
      <Button variant="outline-primary">Two</Button>
    </ButtonGroup>
  </div>
);

export const vertical = (
  <ButtonGroup vertical aria-label="Vertical">
    <Button variant="outline-primary">Top</Button>
    <Button variant="outline-primary">Middle</Button>
    <Button variant="outline-primary">Bottom</Button>
  </ButtonGroup>
);

export const toolbar = (
  <ButtonToolbar aria-label="Formatting">
    <ButtonGroup aria-label="Text style" size="sm">
      <Button variant="outline-primary">Bold</Button>
      <Button variant="outline-primary">Italic</Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Alignment" size="sm">
      <Button variant="outline-secondary">Left</Button>
      <Button variant="outline-secondary">Center</Button>
      <Button variant="outline-secondary">Right</Button>
    </ButtonGroup>
  </ButtonToolbar>
);

/** Editable source strings for react-live, extracted verbatim from this file. */
export const examples = extractExamples(raw);
