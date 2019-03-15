/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import README from './README.md';

import Button from './index';

storiesOf('Button', module)
  .addDecorator(withInfo)
  .addDecorator(withA11y)
  .addDecorator(withReadme(README))
  .add('basic usage', () => (
    <Button
      label="Click me and check the console!"
      onClick={action('button-click')}
    />
  ));
