import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from './index';
import DropdownItem from './item';
import Icon from '../Icon';
import README from './README.md';

// 'basic usage'
// 'menu items as elements'
// 'with icon element'

storiesOf('Navigation|Dropdown', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <Dropdown
      buttonContent={<span>Search Engines</span>}
    >
      <DropdownItem itemLink="https://google.com" itemContent="Google" />
      <DropdownItem itemLink="https://duckduckgo.com" itemContent="DuckDuckGo" />
      <DropdownItem itemLink="https://yahoo.com" itemContent="Yahoo" />
    </Dropdown>
  ))
  .add('with icon element', () => (
    <Dropdown
      className="my-dropdown"
      buttonClassName="btn-secondary"
      iconElement={<Icon className="fa fa-user px-3" />}
      buttonContent={<span>Search Engines</span>}
    >
      <DropdownItem itemLink="https://google.com" itemContent="Google" />
      <DropdownItem itemLink="https://duckduckgo.com" itemContent="DuckDuckGo" />
      <DropdownItem itemLink="https://yahoo.com" itemContent="Yahoo" />
    </Dropdown>
  ));
