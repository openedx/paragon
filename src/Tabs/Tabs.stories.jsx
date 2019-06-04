import React from 'react';
import { storiesOf } from '@storybook/react';

import Tabs from './index';
import README from './README.md';


storiesOf('Navigation|Tabs', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <Tabs tabs={[{ label: 'One', content: 'Hello I am label one' }, { label: 'Two', content: 'Hello I am label two' }]} />
  ));
