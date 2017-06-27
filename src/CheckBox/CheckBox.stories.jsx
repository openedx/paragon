/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';

import CheckBox from './index';

storiesOf('CheckBox', module)
  .add('basic usage', () => (
    <CheckBox
      name="checkbox"
      describedBy="checkbox"
      label="check me out!"
      checked="false"
    />
  ))
  .add('disabled', () => (
    <CheckBox
      name="checkbox"
      describedBy="checkbox"
      label="you cannot check me out"
      checked="false"
      disabled
    />
  ))
  .add('default checked', () => (
    <CheckBox
      name="checkbox"
      describedBy="checkbox"
      label="(un)check me out"
      checked="true"
    />
  ))
  .add('call a function', () => (
    <CheckBox
      name="checkbox"
      describedBy="checkbox"
      label="check out the console"
      checked="false"
      onChange={() => console.log('the checkbox changed state')}
    />
  ));
