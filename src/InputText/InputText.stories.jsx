/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import InputText from './index';

storiesOf('InputText', module)
  .addDecorator(withKnobs)
  .add('minimal usage', () => (
    <InputText
      name="name"
      label={text('label', 'First Name')}
      value="Foo Bar"
    />
  ))
  .add('validation', () => (
    <InputText
      name="username"
      label="Username"
      description={text('description', 'The unique name that identifies you throughout the site.')}
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
