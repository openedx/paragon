/* eslint-disable import/no-extraneous-dependencies, no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { setConsoleOptions } from '@storybook/addon-console';
import { withInfo } from '@storybook/addon-info';
import README from './README.md';

import RadioButtonGroup, { RadioButton } from './index';

setConsoleOptions({
  panelExclude: ['warn', 'error'],
});

const onChange = (event) => {
  console.log(`onChange fired for ${event.target.value}`);

  const selectedIndex = parseInt(event.target.getAttribute('data-index'), 10);
  console.log(`Selected index should be ${selectedIndex}`);

  action('Radio Button Change');
};

const onClick = (event) => {
  console.log(`onClick fired for ${event.target.value}`);

  action('Radio Button Click');
};

const onFocus = (event) => {
  console.log(`onFocus fired for ${event.target.value}`);

  action('Radio Button Focus');
};

const onKeyDown = (event) => {
  console.log(`onKeyDown fired for ${event.target.value} with key value: ${event.key}`);

  action('Radio Button Key Press');
};

storiesOf('RadioButtonGroup', module)
  .addDecorator((story, context) => withInfo({}, README)(story)(context))
  .addDecorator(centered)
  .addDecorator(checkA11y)
  .add('unselected minimal usage', () => (
    <RadioButtonGroup
      name="rbg"
      label="Radio Button Group"
      onBlur={action('Radio Button Blur')}
      onChange={onChange}
      onClick={onClick}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
    >
      <RadioButton value="jaebaebae">First Value</RadioButton>
      <RadioButton value="value2">Second Value</RadioButton>
      <RadioButton value="value3">Third Value</RadioButton>
    </RadioButtonGroup>
  ))
  .add('selected minimal usage', () => (
    <RadioButtonGroup
      name="rbg"
      label="Radio Button Group"
      onBlur={action('Radio Button Blur')}
      onChange={onChange}
      onClick={onClick}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      selectedIndex={1}
    >
      <RadioButton value="jaebaebae">First Value</RadioButton>
      <RadioButton value="value2">Second Value</RadioButton>
      <RadioButton value="value3">Third Value</RadioButton>
    </RadioButtonGroup>
  ));
