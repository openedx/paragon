/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import CheckBox from './index';

storiesOf('CheckBox', module)
  .addDecorator(withKnobs)
  .add('basic usage', () => (
    <CheckBox
      name="checkbox"
      label="check me out!"
      checked="false"
    />
  ))
  .add('disabled', () => (
    <CheckBox
      name="checkbox"
      label="you cannot check me out"
      checked="false"
      disabled={boolean('disabled', true)}
    />
  ))
  .add('default checked', () => (
    <CheckBox
      name="checkbox"
      label="(un)check me out"
      checked="true"
    />
  ))
  .add('call a function', () => (
    <CheckBox
      name="checkbox"
      label="check out the console"
      checked="false"
      onChangeState={() => console.log('the checkbox changed state')}
    />
  ));
