/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';

import InputSelect from './index';
import README from './README.md';

storiesOf('InputSelect', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(centered)
  .addDecorator(checkA11y)
  .addDecorator(withReadme(README))
  .add('basic usage', () => (
    <InputSelect
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
    <InputSelect
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
    <InputSelect
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
    <InputSelect
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
  ))
  .add('disabled usage', () => (
    <InputSelect
      name="fruits"
      label="Fruits"
      value="strawberry"
      options={[
        'apple',
        'orange',
        'strawberry',
        'banana',
      ]}
      disabled
    />
  ));
