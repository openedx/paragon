import React from 'react';
import { storiesOf } from '@storybook/react';

import Tooltip from './index';

storiesOf('Tooltip', module)
  .add('basic usage', () => (
    <Tooltip />
  ));
