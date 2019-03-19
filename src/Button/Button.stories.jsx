import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import README from './README.md';

import Button from './index';

storiesOf('Button', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <Button onClick={action('button-click')}>
      Click me and check the console!
    </Button>
  ));
