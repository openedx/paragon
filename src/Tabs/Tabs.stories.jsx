import React from 'react';
import { storiesOf } from '@storybook/react';

import Tabs from './index';
import README from './README.md';

storiesOf('Tabs', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <Tabs
      labels={[
        'Panel 1',
        'Panel 2',
        'Panel 3',
      ]}
    >
      <div>Hello I am the first panel</div>
      <div>Hello I am the second panel</div>
      <div>Hello I am the third panel</div>
    </Tabs>
  ));
