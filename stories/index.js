import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import TextInput from '../src/TextInput';
import SelectInput from '../src/SelectInput';
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
      validate={(value) => {
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
  ));
