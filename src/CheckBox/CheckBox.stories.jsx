/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';

import CheckBox from './index';

storiesOf('CheckBox', module)
  .add('basic usage', () => (
    <div>
      <h1>CheckBox</h1>
      <p>This is the basic checkbox that is default unchecked</p>
      <CheckBox
        name="checkbox"
        describedBy="checkbox"
        label="check me out!"
        checked="false"
      />
    </div>
  ))
  .add('disabled', () => (
    <div>
      <h1>Disabled CheckBox</h1>
      <p>This checkbox is disabled so it cannot be checked</p>
      <CheckBox
        name="checkbox"
        describedBy="checkbox"
        label="you cannot check me out"
        checked="false"
        disabled
      />
    </div>
  ))
  .add('default checked', () => (
    <div>
      <h1>Selected CheckBox</h1>
      <p>The default state of this checkbox is checked</p>
      <CheckBox
        name="checkbox"
        describedBy="checkbox"
        label="(un)check me out"
        checked="true"
      />
    </div>
  ))
  .add('call a function', () => (
    <div>
      <h1>CheckBox with callback</h1>
      <p>This checkbox calls a function when it is either enabled or disabled</p>
      <CheckBox
        name="checkbox"
        describedBy="checkbox"
        label="check out the console"
        checked="false"
        onChange={() => console.log('the checkbox changed state')}
      />
    </div>
  ));
