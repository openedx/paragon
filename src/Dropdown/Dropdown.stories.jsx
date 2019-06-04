import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from './index';
import DropdownItem from './item';
import Icon from '../Icon';
import README from './README.md';

storiesOf('Navigation|Dropdown', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <Dropdown
      buttonClassName="dropdown-toggle"
      buttonContent={<span>Search Engines</span>}
    >
      <DropdownItem href="https://google.com">Google</DropdownItem>
      <DropdownItem href="https://duckduckgo.com">DuckDuckGo</DropdownItem>
      <DropdownItem href="https://yahoo.com">Yahoo</DropdownItem>
    </Dropdown>
  ))
  .add('with icon element', () => (
    <Dropdown
      buttonClassName="dropdown-toggle"
      buttonContent={<span><Icon className="fa fa-user icon-left" alt="icon-user" />Search Engines</span>}
    >
      <DropdownItem href="https://google.com">Google</DropdownItem>
      <DropdownItem href="https://duckduckgo.com">DuckDuckGo</DropdownItem>
      <DropdownItem href="https://yahoo.com">Yahoo</DropdownItem>
    </Dropdown>
  ))
  .add('with caret/chevron', () => (
    <React.Fragment>
      <Dropdown
        buttonClassName="dropdown-toggle"
        buttonContent={<span>Search Engines<Icon className="fa fa-caret-down icon-right" alt="icon-caret" /></span>}
      >
        <DropdownItem href="https://google.com">Google</DropdownItem>
        <DropdownItem href="https://duckduckgo.com">DuckDuckGo</DropdownItem>
        <DropdownItem href="https://yahoo.com">Yahoo</DropdownItem>
      </Dropdown>
      <Dropdown
        buttonClassName="dropdown-toggle"
        buttonContent={<span>Search Engines<Icon className="fa fa-angle-down icon-right" alt="icon-caret" /></span>}
      >
        <DropdownItem href="https://google.com">Google</DropdownItem>
        <DropdownItem href="https://duckduckgo.com">DuckDuckGo</DropdownItem>
        <DropdownItem href="https://yahoo.com">Yahoo</DropdownItem>
      </Dropdown>
    </React.Fragment>
  ));
