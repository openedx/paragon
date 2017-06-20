/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';

import TextInput from '../src/TextInput';
import SelectInput from '../src/SelectInput';
import CheckBox from '../src/CheckBox';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ));

storiesOf('TextInput', module)
  .add('minimal usage', () => (
    <TextInput
      name="name"
      label="First Name"
      value="Foo Bar"
    />
  ))
  .add('validation', () => (
    <TextInput
      name="username"
      label="Username"
      description="The unique name that identifies you throughout the site."
      validator={(value) => {
        let feedback = { isValid: true };
        if (value.length < 3) {
          feedback = {
            isValid: false,
            validationMessage: 'Username must be at least 3 characters in length.',
          };
        }
        return feedback;
      }}
    />
  ));

storiesOf('SelectInput', module)
  .add('basic usage', () => (
    <SelectInput
      name="fruits"
      label="Fruits"
      value="strawberry"
      options={[
        'apple',
        'orange',
        'strawberry',
        'banana',
      ]}
    />
  ))
  .add('separate labels and values', () => (
    <SelectInput
      name="new-england-states"
      label="New England States"
      value="RI"
      options={[
        { label: 'Connecticut', value: 'CN' },
        { label: 'Maine', value: 'ME' },
        { label: 'Massachusetts', value: 'MA' },
        { label: 'New Hampshire', value: 'NH' },
        { label: 'Rhode Island', value: 'RI' },
        { label: 'Vermont', value: 'VT' },
      ]}
    />
  ))
  .add('separate option groups', () => (
    <SelectInput
      name="northeast-states"
      label="Northeast States"
      value="MD"
      options={[
        {
          label: 'New England States',
          options: [
            { label: 'Connecticut', value: 'CN' },
            { label: 'Maine', value: 'ME' },
            { label: 'Massachusetts', value: 'MA' },
            { label: 'New Hampshire', value: 'NH' },
            { label: 'Rhode Island', value: 'RI' },
            { label: 'Vermont', value: 'VT' },
          ],
        },
        {
          label: 'Mid Atlantic States',
          options: [
            { label: 'Delaware', value: 'DE' },
            { label: 'Maryland', value: 'MD' },
            { label: 'New Jersey', value: 'NJ' },
            { label: 'New York', value: 'NY' },
            { label: 'Pennsylvania', value: 'PA' },
            { label: 'Virginia', value: 'VA' },
            { label: 'Washington, DC', value: 'DC' },
            { label: 'West Virginia', value: 'WV' },
          ],
        },
      ]}
    />
  ))
  .add('with validation', () => (
    <SelectInput
      name="color"
      label="Favorite Color"
      options={[
        '',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
      ]}
      validator={(value) => {
        let feedback = { isValid: true };
        if (!value) {
          feedback = {
            isValid: false,
            validationMessage: 'Please make a selection.',
          };
        }
        return feedback;
      }}
    />
  ));

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
      disabled="true"
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
