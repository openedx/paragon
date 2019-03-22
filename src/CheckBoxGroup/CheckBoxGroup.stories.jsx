/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';

import CheckBoxGroup from './index';
import CheckBox from '../CheckBox';

import README from './README.md';

storiesOf('CheckBoxGroup', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(centered)
  .addDecorator(checkA11y)
  .addDecorator(withReadme(README))
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
