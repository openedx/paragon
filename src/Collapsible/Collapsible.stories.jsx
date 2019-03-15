import React from 'react';
import { storiesOf } from '@storybook/react';
import README from './README.md';

import Collapsible from './index';
import { breakpoints } from '../Responsive';

storiesOf('Collapsible', module)
  .addParameters({ info: { text: README } })
  .add('basic usage without resizing', () => (
    <Collapsible title="Click me to expand">
      <p>Your stuff goes here</p>
    </Collapsible>
  ))
  .add('basic usage with resizing', () => (
    <div>
      <Collapsible
        expandedTitle={<h2>Try resizing the screen to medium or small</h2>}
        title="Try resizing the screen to large"
        isCollapsible={() => global.innerWidth >= breakpoints.large.minWidth ||
          window.matchMedia(`(min-width: ${breakpoints.large.minWidth}px)`).matches}
      >
        <div>
          <h3>You can fit lots of things in here</h3>
          <ul>
            <li>1 thing</li>
            <li>2 things</li>
            <li>3 things</li>
          </ul>
        </div>
      </Collapsible>
    </div>
  ))
  .add('initially open collapsible', () => (
    <Collapsible title="Click me to expand" isOpen>
      <p>Your stuff goes here</p>
    </Collapsible>
  ))
  .add('fires onToggle callback when toggled', () => (
    <Collapsible
      title="Click me to expand"
      onToggle={isOpen => console.log(`this.state.isOpen = ${isOpen}`)} // eslint-disable-line no-console
    >
      <p>Your stuff goes here</p>
    </Collapsible>
  ));
