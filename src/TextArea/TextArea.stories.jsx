/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';

import TextArea from './index';

import README from './README.md';

storiesOf('Textarea', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(centered)
  .addDecorator(checkA11y)
  .addDecorator(withReadme(README))
  .add('minimal usage', () => (
    <TextArea
      name="name"
      label="First Name"
      value="Foo Bar"
    />
  ))
  .add('scrollable', () => (
    <TextArea
      name="name"
      label="Information"
      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
       incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
       exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
       dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
       mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
       irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
       mollit anim id est laborum."
    />
  ))
  .add('validation', () => (
    <TextArea
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
  ))
  .add('label as element', () => (
    <TextArea
      name="username"
      label={<span lang="en">Element</span>}
      value="Label is wrapped in language span"
    />
  ));
