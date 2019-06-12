import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from './index';
import Icon from '../Icon';
import README from './README.md';

storiesOf('Navigation|Dropdown', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <Dropdown
      buttonContent="Search Engines"
    >
      <Dropdown.Item href="https://google.com">Google</Dropdown.Item>
      <Dropdown.Item href="https://duckduckgo.com">DuckDuckGo</Dropdown.Item>
      <Dropdown.Item href="https://yahoo.com">Yahoo</Dropdown.Item>
    </Dropdown>
  ))
  .add('with icon element', () => (
    <Dropdown
      buttonContent={<span><Icon className="fa fa-user pr-3" alt="" />Search Engines</span>}
    >
      <Dropdown.Item href="https://google.com">Google</Dropdown.Item>
      <Dropdown.Item href="https://duckduckgo.com">DuckDuckGo</Dropdown.Item>
      <Dropdown.Item href="https://yahoo.com">Yahoo</Dropdown.Item>
    </Dropdown>
  ))
  .add('with caret/chevron', () => (
    <React.Fragment>
      <Dropdown
        className="mb-3"
        buttonContent={<span>Search Engines<Icon className="fa fa-caret-down pl-3" alt="" /></span>}
      >
        <Dropdown.Item href="https://google.com">Google</Dropdown.Item>
        <Dropdown.Item href="https://duckduckgo.com">DuckDuckGo</Dropdown.Item>
        <Dropdown.Item href="https://yahoo.com">Yahoo</Dropdown.Item>
      </Dropdown>
      <Dropdown
        buttonContent={<span>Search Engines<Icon className="fa fa-angle-down pl-3" alt="" /></span>}
      >
        <Dropdown.Item href="https://google.com">Google</Dropdown.Item>
        <Dropdown.Item href="https://duckduckgo.com">DuckDuckGo</Dropdown.Item>
        <Dropdown.Item href="https://yahoo.com">Yahoo</Dropdown.Item>
      </Dropdown>
    </React.Fragment>
  ));
