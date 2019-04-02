import React from 'react';
import { storiesOf } from '@storybook/react';

import CheckBoxGroup from './index';
import CheckBox from '../CheckBox';

import README from './README.md';

storiesOf('User Input|CheckBoxGroup', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <CheckBoxGroup>
      <CheckBox
        id="checkbox1"
        name="basicCheckBox1"
        label="CheckBox 1"
      />
      <CheckBox
        id="checkbox2"
        name="basicCheckBox2"
        label="CheckBox 2"
      />
      <CheckBox
        id="checkbox3"
        name="basicCheckBox3"
        label="CheckBox 3"
      />
    </CheckBoxGroup>
  ));
