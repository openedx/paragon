/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Tabs from './index';

storiesOf('Tabs', module)
  .add('minimal usage', () => (
    <Tabs
      labels={[
        'Panel 1',
        'Panel 2',
        'Panel 3',
      ]}
      panels={[
        <div>Hello I am the first panel</div>,
        <div>Hello I am the second panel</div>,
        <div>Hello I am the third panel</div>,
      ]}
    />
  ));
