import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import README from './README.md';

import Button from './index';

storiesOf('Basics|Button', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <Button
      label="Click me and check the console!"
      onClick={action('button-click')}
    />
  ));
