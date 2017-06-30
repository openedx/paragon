/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from './index';

storiesOf('Dropdown', module)
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
