import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tabs } from './Tabs';
import Tab from './Tab';
import { LivePlayground, generateCode, playgroundChildren } from '../docs/LivePlayground';
import { extractExamples } from '../docs/extractExamples';
import raw from './Tabs.stories.tsx?raw';

const VARIANTS = ['tabs', 'pills', 'inverse-tabs', 'inverse-pills', 'button-group'];

const meta: Meta<typeof Tabs> = {
  // Hidden `Internal/` root + `!dev` so the sidebar only shows the standalone
  // "Navigation/Tabs" MDX docs page (same pattern as Button.stories.tsx).
  title: 'Internal/Tabs',
  component: Tabs,
  tags: ['!dev'],
  // PascalCase exports are stories; camelCase exports below are typechecked
  // docs example source (see Button.stories.tsx for the full rationale).
  includeStories: /^[A-Z]/,
  parameters: { layout: 'padded' },
  args: {
    variant: 'tabs',
    defaultActiveKey: 'profile',
  },
  argTypes: {
    variant: { control: 'select', options: VARIANTS },
    defaultActiveKey: { control: 'inline-radio', options: ['home', 'profile', 'contact'] },
    // The tab set is fixed for the Playground; a ReactNode control makes no sense.
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Playground: Story = {
  render: (args) => (
    <LivePlayground
      code={generateCode('Tabs', args, {
        defaults: { variant: 'tabs' },
        children: playgroundChildren(args.children, [
          '<Tab eventKey="home" title="Home">Hello I am the first panel.</Tab>',
          '<Tab eventKey="profile" title="Profile">Hello I am the second panel.</Tab>',
          '<Tab eventKey="contact" title="Contact" disabled>Hello I am the third panel.</Tab>',
        ].join('\n')),
      })}
    />
  ),
};

/*
 * ---------------------------------------------------------------------------
 * Docs live examples.
 *
 * Authored as real TSX so TypeScript typechecks every prop against the Tabs /
 * Tab types, then their verbatim source is extracted (see `extractExamples`) and
 * fed to react-live so the docs stay editable. camelCase on purpose —
 * `includeStories` above keeps Storybook from treating them as stories. Each is a
 * single expression wrapped in `( … )`.
 *
 * These mirror src/Tabs/README.md 1:1 and in the same order. The nav / tab
 * classes are part of Paragon's global public class layer (src/styles/tabs.css),
 * so these snippets render the same as raw `<ul class="nav nav-tabs">` markup.
 * The README's `<Stack className="bg-dark-700 p-4">` inverse wrappers become
 * inline styles reading the `--pgn-color-dark-700` token, since the prototype
 * does not ship Bootstrap's background/padding utilities.
 * ---------------------------------------------------------------------------
 */

export const uncontrolled = (
  <Tabs variant="tabs" defaultActiveKey="profile" id="uncontrolled-tab-example">
    <Tab eventKey="home" title="Home">
      Hello I am the first panel.
    </Tab>
    <Tab eventKey="profile" title="Profile">
      Hello I am the second panel.
    </Tab>
    <Tab eventKey="contact" title="Contact" disabled>
      Hello I am the third panel.
    </Tab>
  </Tabs>
);

export const controlled = (
  () => {
    const [key, setKey] = React.useState('home');

    return (
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k as string)}>
        <Tab eventKey="home" title="Home">
          Hello I am the first panel.
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Hello I am the second panel.
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          Hello I am the third panel.
        </Tab>
      </Tabs>
    );
  }
);

export const buttonGroup = (
  <Tabs defaultActiveKey="profile" id="button-group-tab-example" variant="button-group">
    <Tab eventKey="home" title="Home">
      Hello I am the first panel.
    </Tab>
    <Tab eventKey="profile" title="Profile">
      Hello I am the second panel.
    </Tab>
    <Tab eventKey="contact" title="Contact" disabled>
      Hello I am the third panel.
    </Tab>
  </Tabs>
);

export const pills = (
  <Tabs defaultActiveKey="profile" id="pills-tab-example" variant="pills">
    <Tab eventKey="home" title="Home">
      Hello I am the first panel.
    </Tab>
    <Tab eventKey="profile" title="Profile">
      Hello I am the second panel.
    </Tab>
    <Tab eventKey="contact" title="Contact" disabled>
      Hello I am the third panel.
    </Tab>
  </Tabs>
);

export const inversePills = (
  <div style={{ backgroundColor: 'var(--pgn-color-dark-700)', padding: '1rem' }}>
    <Tabs variant="inverse-pills" defaultActiveKey="profile" id="inverse-pills-tab-example">
      <Tab eventKey="home" title="Home">
        Hello I am the first panel.
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Hello I am the second panel.
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Hello I am the third panel.
      </Tab>
    </Tabs>
  </div>
);

export const inverseTabs = (
  <div style={{ backgroundColor: 'var(--pgn-color-dark-700)', padding: '1rem' }}>
    <Tabs variant="inverse-tabs" defaultActiveKey="profile" id="inverse-tabs-tab-example">
      <Tab eventKey="home" title="Home">
        Hello I am the first panel.
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Hello I am the second panel.
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Hello I am the third panel.
      </Tab>
    </Tabs>
  </div>
);

export const withNotification = (
  <Tabs defaultActiveKey="profile" id="tab-example-with-notification">
    <Tab eventKey="home" title="Home">
      Hello I am the first panel.
    </Tab>
    <Tab eventKey="profile" title="Profile" notification={1}>
      Hello I am the second panel.
    </Tab>
  </Tabs>
);

export const withScreenReaderNotification = (
  <Tabs defaultActiveKey="profile" id="tab-example-with-sr-notification">
    <Tab eventKey="home" title="Home">
      Hello I am the first panel.
    </Tab>
    <Tab
      eventKey="profile"
      title="Profile"
      notification={(
        <span>
          1
          <span className="sr-only">notification</span>
        </span>
      )}
    >
      Hello I am the second panel.
    </Tab>
  </Tabs>
);

export const conditionalRendering = (
  () => {
    const librariesEnabled = true;
    const visibleTabs = [
      <Tab key="courses" eventKey="courses" title="Courses">
        Hello I am the courses panel.
      </Tab>,
      <Tab key="programs" eventKey="programs" title="Programs">
        Hello I am the programs panel.
      </Tab>,
    ];

    if (librariesEnabled) {
      visibleTabs.push(
        <Tab key="libraries" eventKey="libraries" title="Libraries">
          Hello I am the libraries panel.
        </Tab>,
      );
    }

    return (
      <Tabs id="conditional-tabs" defaultActiveKey="courses">
        {visibleTabs}
      </Tabs>
    );
  }
);

/** Editable source strings for react-live, extracted verbatim from this file. */
export const examples = extractExamples(raw);
