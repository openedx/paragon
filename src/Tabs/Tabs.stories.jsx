import React from 'react';
import { storiesOf } from '@storybook/react';

import Tabs from './index';
import README from './README.md';


storiesOf('Navigation|Tabs', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <Tabs tabs={[{ label: 'Panel 1', panel: 'Hello I am the first panel' }, { label: 'Panel 2', panel: 'Hello I am the second panel' }, { label: 'Panel 3', panel: 'Hello I am the third panel' }]} />
  ));
