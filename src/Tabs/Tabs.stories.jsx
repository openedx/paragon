import React from 'react';
import { storiesOf } from '@storybook/react';

import Tabs from './index';
import README from './README.md';

storiesOf('Navigation|Tabs', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <Tabs>
      <Tabs.Panel label="one">Hello I am the first panel</Tabs.Panel>
      <Tabs.Panel label="two">Hello I am the second panel</Tabs.Panel>
      <Tabs.Panel label="three">Hello I am the third panel</Tabs.Panel>
    </Tabs>
  ));
