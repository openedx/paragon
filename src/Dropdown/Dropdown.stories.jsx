import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from './index';
import Icon from '../Icon';
import README from './README.md';

storiesOf('Navigation|Dropdown', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <Dropdown
      buttonClassName="dropdown-toggle btn-light"
      buttonContent={<span>Search Engines</span>}
    >
      <Dropdown.Item itemClassName="dropdown-item" href="https://google.com">Google</Dropdown.Item>
      <Dropdown.Item itemClassName="dropdown-item" href="https://duckduckgo.com">DuckDuckGo</Dropdown.Item>
      <Dropdown.Item itemClassName="dropdown-item" href="https://yahoo.com">Yahoo</Dropdown.Item>
    </Dropdown>
  ))
  .add('with icon element', () => (
    <Dropdown
      buttonClassName="dropdown-toggle btn-light"
      buttonContent={<span><Icon className="fa fa-user pr-3" alt="icon-user" />Search Engines</span>}
    >
      <Dropdown.Item itemClassName="dropdown-item" href="https://google.com">Google</Dropdown.Item>
      <Dropdown.Item itemClassName="dropdown-item" href="https://duckduckgo.com">DuckDuckGo</Dropdown.Item>
      <Dropdown.Item itemClassName="dropdown-item" href="https://yahoo.com">Yahoo</Dropdown.Item>
    </Dropdown>
  ))
  .add('with caret/chevron', () => (
    <React.Fragment>
      <Dropdown
        buttonClassName="dropdown-toggle btn-light"
        buttonContent={<span>Search Engines<Icon className="fa fa-caret-down pl-3" alt="icon-caret" /></span>}
      >
        <Dropdown.Item itemClassName="dropdown-item" href="https://google.com">Google</Dropdown.Item>
        <Dropdown.Item itemClassName="dropdown-item" href="https://duckduckgo.com">DuckDuckGo</Dropdown.Item>
        <Dropdown.Item itemClassName="dropdown-item" href="https://yahoo.com">Yahoo</Dropdown.Item>
      </Dropdown>
      <Dropdown
        buttonClassName="dropdown-toggle btn-light"
        buttonContent={<span>Search Engines<Icon className="fa fa-angle-down pl-3" alt="icon-chevron" /></span>}
      >
        <Dropdown.Item itemClassName="dropdown-item" href="https://google.com">Google</Dropdown.Item>
        <Dropdown.Item itemClassName="dropdown-item" href="https://duckduckgo.com">DuckDuckGo</Dropdown.Item>
        <Dropdown.Item itemClassName="dropdown-item" href="https://yahoo.com">Yahoo</Dropdown.Item>
      </Dropdown>
    </React.Fragment>
  ));
