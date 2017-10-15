/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CheckBox from './index';

storiesOf('CheckBox', module)
  .add('basic usage', () => (
    <CheckBox
      name="checkbox"
      label="check me out!"
    />
  ))
  .add('disabled', () => (
    <CheckBox
      name="checkbox"
      label="you cannot check me out"
      disabled
    />
  ))
  .add('default checked', () => (
    <CheckBox
      name="checkbox"
      label="(un)check me out"
      checked
    />
  ))
  .add('call a function', () => (
    <CheckBox
      name="checkbox"
      label="check out the action logger"
      onChange={action('Checkbox.onChange')}
    />
  ));
