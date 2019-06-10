import React from 'react';
import { storiesOf } from '@storybook/react';

import Tabs from './index';
import README from './README.md';

storiesOf('Navigation|Tabs', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <Tabs
      tabs={[{
        label: 'Panel 1',
        content: 'Hello I am the first panel',
      }, {
        label: 'Panel 2',
        content: 'Hello I am the second panel',
      }, {
        label: 'Panel 3',
        content: 'Hello I am the third panel',
      }]}
    />
  ))
  .add('passing elements as props', () => (
    <Tabs
      tabs={[{
        label: 'Panel 1',
        content:
  <div>
    <p>Panel 1 paragraph 1 with an element as props</p>
    <p>Panel 1 paragraph 2 with an element as props</p>
  </div>,
      }, {
        label: 'Panel 2',
        content:
  <div>
    <p>Panel 2 paragraph 1 with an element as props</p>
    <p>Panel 2 paragraph 2 with an element as props</p>
  </div>,
      }, {
        label: 'Panel 3',
        content:
  <div>
    <p>Panel 3 paragraph 1 with an element as props</p>
    <p>Panel 3 paragraph 2 with an element as props</p>
  </div>,
      }]}
    />
  ));
