/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import Dropdown from './index';
import README from './README.md';

storiesOf('Dropdown', module)
  .addDecorator((story, context) => withInfo({}, README)(story)(context))
  .addDecorator(centered)
  .addDecorator(checkA11y)
  .add('basic usage', () => (
    <Dropdown
      title="Search Engines"
      menuItems={[
        {
          label: 'Google',
          href: 'https://google.com',
        },
        {
          label: 'DuckDuckGo',
          href: 'https://duckduckgo.com',
        },
        {
          label: 'Yahoo',
          href: 'https://yahoo.com',
        },
      ]}
    />
  ));
