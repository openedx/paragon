/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';

import CheckBoxGroup from './index';
import CheckBox from '../CheckBox';

storiesOf('CheckBoxGroup', module)
  .add('basic usage', () => (
    <CheckBoxGroup>
      <CheckBox
        id="checkbox1"
        name="basicCheckBox"
        label="CheckBox 1"
      />
      <CheckBox
        id="checkbox2"
        name="basicCheckBox"
        label="CheckBox 2"
      />
      <CheckBox
        id="checkbox3"
        name="basicCheckBox"
        label="CheckBox 3"
      />
    </CheckBoxGroup>
  ));
