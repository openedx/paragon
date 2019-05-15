import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from './index';
import Icon from '../Icon';
import README from './README.md';

storiesOf('Navigation|Dropdown', module)
  .addParameters({ info: { text: README } })
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
  ))
  .add('menu items as elements', () => (
    <Dropdown
      title="Search Engines"
      menuItems={[
        <a href="http://www.google.com">Google</a>,
        <a href="http://www.duckduckgo.com">DuckDuckGo</a>,
        <a href="http://www.yahoo.com">Yahoo</a>,
      ]}
    />
  ))
  .add('with icon element', () => (
    <Dropdown
      title="Search Engines"
      iconElement={<Icon className="fa fa-user px-3" />}
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
