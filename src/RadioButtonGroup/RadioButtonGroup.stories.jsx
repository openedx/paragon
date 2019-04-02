/* eslint-disable import/no-extraneous-dependencies, no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import README from './README.md';

import RadioButtonGroup, { RadioButton } from './index';

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

storiesOf('User Input|RadioButtonGroup', module)
  .addParameters({ info: { text: README } })
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
