/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { setConsoleOptions } from '@storybook/addon-console';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';

import MailtoLink from './index';
import README from './README.md';

setConsoleOptions({
  panelExclude: ['warn', 'error'],
});

const onClick = (event) => {
  console.log(`onClick fired for ${event.target}`);

  action('MailtoLink Click');
};

storiesOf('MailtoLink', module)
  .addDecorator((story, context) => withInfo({}, README)(story)(context))
  .addDecorator(centered)
  .addDecorator(checkA11y)
  .add('minimal usage', () => (
    <MailtoLink
      to="edx@example.com"
      content="edx@example.com"
    />
  ))
  .add('with blank target', () => (
    <MailtoLink
      to="edx@example.com"
      content="edx@example.com"
      target="_blank"
    />
  ))
  .add('with onClick', () => (
    <MailtoLink
      to="edx@example.com"
      content="edx@example.com"
      target="_blank"
      onClick={onClick}
    />
  ))
  .add('with subject and body', () => (
    <MailtoLink
      to="edx@example.com"
      subject="Check out this mailto component!"
      body="This mailto component is awesome!"
      content="email with subject and body"
    />
  ))
  .add('with cc and bcc', () => (
    <MailtoLink
      cc="edx@example.com"
      bcc="edx@example.com"
      content="Moar mail, this time with cc and bcc"
    />
  ))
  .add('with multiple cc and bcc', () => (
    <MailtoLink
      cc={['foo@example.com', 'bar@example.com', 'baz@example.com']}
      bcc={['foo@example.com', 'bar@example.com', 'baz@example.com']}
      content="edx@example.com"
    />
  ));
