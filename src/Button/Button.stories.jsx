/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './index';

storiesOf('Button', module)
  .add('basic usage', () => (
    <Button
      label="Click me and check the console!"
      onClick={action('button-click')}
    />
  ));
