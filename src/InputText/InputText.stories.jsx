/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import InputText from './index';

storiesOf('InputText', module)
  .add('minimal usage', () => (
    <InputText
      name="name"
      label="First Name"
      value="Foo Bar"
    />
  ))
  .add('validation', () => (
    <InputText
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
