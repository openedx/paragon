import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Collapsible } from './Collapsible';
import {
  LivePlayground, generateCode, raw as rawExpr, playgroundChildren,
} from '../docs/LivePlayground';
import { extractExamples } from '../docs/extractExamples';
import raw from './Collapsible.stories.tsx?raw';

const meta: Meta<typeof Collapsible> = {
  // Hidden `Internal/` root + `!dev` so the sidebar only shows the standalone
  // "Content/Collapsible" MDX docs page (same pattern as Button.stories.tsx).
  title: 'Internal/Collapsible',
  component: Collapsible,
  tags: ['!dev'],
  // PascalCase exports are stories; camelCase exports below are typechecked
  // docs example source (see Button.stories.tsx for the full rationale).
  includeStories: /^[A-Z]/,
  parameters: { layout: 'padded' },
  args: {
    title: 'Toggle Collapsible',
    styling: 'basic',
    defaultOpen: false,
    iconWhenClosed: 'unset',
    iconWhenOpen: 'unset',
  },
  argTypes: {
    title: { control: 'text' },
    styling: { control: 'inline-radio', options: ['basic', 'card', 'card-lg'] },
    defaultOpen: { control: 'boolean' },
    children: { control: 'text' },
    // The icon slots take JSX, but the control only carries a choice string that
    // the Playground maps to the JSX shown in the generated snippet (see below).
    iconWhenClosed: {
      options: ['unset', 'icon', 'text'],
      control: { type: 'inline-radio', labels: { unset: '(unset)', icon: '+ icon', text: '"Open" text' } },
    },
    iconWhenOpen: {
      options: ['unset', 'icon', 'text'],
      control: { type: 'inline-radio', labels: { unset: '(unset)', icon: '– icon', text: '"Close" text' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

type IconChoice = 'unset' | 'icon' | 'text';

/**
 * Maps the Playground's icon radio choice to the value the generated snippet
 * shows: `unset` omits the prop (Collapsible falls back to its chevrons), `icon`
 * emits a raw `<Add />` / `<Remove />` (the `+` / `–` icons from the Button docs,
 * in live `scope`), and `text` passes a plain string the trigger renders as-is.
 */
function iconProp(choice: IconChoice, iconExpr: string, text: string) {
  if (choice === 'icon') return rawExpr(iconExpr);
  if (choice === 'text') return text;
  return undefined;
}

export const Playground: Story = {
  render: (args) => (
    <LivePlayground
      code={generateCode('Collapsible', {
        ...args,
        iconWhenClosed: iconProp(args.iconWhenClosed as IconChoice, '<Add />', 'Open'),
        iconWhenOpen: iconProp(args.iconWhenOpen as IconChoice, '<Remove />', 'Close'),
      }, {
        defaults: { styling: 'card', defaultOpen: false },
        children: playgroundChildren(args.children, '<p>Your stuff goes here.</p>'),
      })}
    />
  ),
};

/*
 * ---------------------------------------------------------------------------
 * Docs live examples.
 *
 * Authored as real TSX so TypeScript typechecks every prop against the
 * Collapsible types, then their verbatim source is extracted (see
 * `extractExamples`) and fed to react-live so the docs stay editable. camelCase
 * on purpose — `includeStories` above keeps Storybook from treating them as
 * stories. Each is a single expression wrapped in `( … )`.
 *
 * These mirror src/Collapsible/README.md 1:1 and in the same order. The
 * component style classes (`collapsible-card`, `collapsible-trigger`,
 * `collapsible-body`) and the utility / button classes (`d-flex`, `flex-grow-1`,
 * `btn btn-outline-primary`) are all part of Paragon's global public class layer
 * (src/styles/*.css), so these snippets are verbatim copies of the README.
 * ---------------------------------------------------------------------------
 */

export const basicStyle = (
  <Collapsible
    styling="basic"
    title="Toggle Collapsible"
  >
    <p>Your stuff goes here.</p>
  </Collapsible>
);

export const cardStyle = (
  <Collapsible
    styling="card"
    title={<p><strong>Toggle Collapsible</strong></p>}
  >
    <p>Your stuff goes here.</p>
  </Collapsible>
);

export const defaultOpen = (
  <Collapsible title="I'm not a heading" defaultOpen>
    <p>Your stuff goes here.</p>
  </Collapsible>
);

export const withCallbacks = (
  <Collapsible
    title="Toggle Collapsible"
    defaultOpen
    onToggle={(isOpen) => console.log('Collapsible toggled and open is: ', isOpen)}
    onOpen={() => console.log('Collapsible opened.')}
    onClose={() => console.log('Collapsible closed.')}
  >
    <p>See the console.</p>
  </Collapsible>
);

export const advancedBareMinimum = (
  <Collapsible.Advanced>
    <Collapsible.Trigger>
      Toggle Collapsible
    </Collapsible.Trigger>
    <Collapsible.Body>
      <p>Your stuff goes here</p>
    </Collapsible.Body>
  </Collapsible.Advanced>
);

export const advancedCard = (
  <Collapsible.Advanced className="collapsible-card">
    <Collapsible.Trigger className="collapsible-trigger d-flex">
      <span className="flex-grow-1">This is the title</span>
      <Collapsible.Visible whenClosed> + </Collapsible.Visible>
      <Collapsible.Visible whenOpen> - </Collapsible.Visible>
    </Collapsible.Trigger>

    <Collapsible.Body className="collapsible-body">
      The content
    </Collapsible.Body>
  </Collapsible.Advanced>
);

export const advancedWithCloseButton = (
  <Collapsible.Advanced className="collapsible-card" defaultOpen>
    <Collapsible.Trigger className="collapsible-trigger d-flex">
      <span className="flex-grow-1">This is the title</span>
      <Collapsible.Visible whenClosed> + </Collapsible.Visible>
      <Collapsible.Visible whenOpen> - </Collapsible.Visible>
    </Collapsible.Trigger>

    <Collapsible.Body className="collapsible-body">
      <p>The content</p>

      <Collapsible.Trigger closeOnly tag="a" className="btn btn-outline-primary">
        Close
      </Collapsible.Trigger>
    </Collapsible.Body>
  </Collapsible.Advanced>
);

export const advancedCallbacks = (
  <Collapsible.Advanced
    className="collapsible-card-lg"
    onToggle={(isOpen) => console.log('Collapsible toggled and open is: ', isOpen)}
    onOpen={() => console.log('Collapsible opened.')}
    onClose={() => console.log('Collapsible closed.')}
  >
    <Collapsible.Trigger className="collapsible-trigger">
      <h4 className="flex-grow-1">I'm a heading</h4>

      <Collapsible.Visible whenClosed>
        +
      </Collapsible.Visible>

      <Collapsible.Visible whenOpen>
        -
      </Collapsible.Visible>
    </Collapsible.Trigger>

    <Collapsible.Body className="collapsible-body">
      <p>Your stuff goes here.</p>

      <Collapsible.Trigger closeOnly tag="a" className="btn btn-outline-primary">
        Close
      </Collapsible.Trigger>
    </Collapsible.Body>
  </Collapsible.Advanced>
);

export const advancedControlled = (
  () => {
    const [collapseIsOpen, setCollapseOpen] = React.useState(true);

    return (
      <Collapsible.Advanced
        open={collapseIsOpen}
        onToggle={(isOpen) => setCollapseOpen(isOpen)}
        className="collapsible-card"
      >
        <Collapsible.Trigger className="collapsible-trigger">
          <h4 className="flex-grow-1">I'm a heading</h4>

          <Collapsible.Visible whenClosed>
            +
          </Collapsible.Visible>

          <Collapsible.Visible whenOpen>
            -
          </Collapsible.Visible>
        </Collapsible.Trigger>

        <Collapsible.Body className="collapsible-body">
          <p>Your stuff goes here.</p>

          <Collapsible.Trigger closeOnly tag="a" className="btn btn-outline-primary">
            Close
          </Collapsible.Trigger>
        </Collapsible.Body>
      </Collapsible.Advanced>
    );
  }
);

/** Editable source strings for react-live, extracted verbatim from this file. */
export const examples = extractExamples(raw);
