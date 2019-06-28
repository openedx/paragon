import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from './index';

import Icon from '../Icon';
import README from './README.md';

storiesOf('Navigation|Dropdown', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <Dropdown>
      <Dropdown.Button>
        Search Engines
      </Dropdown.Button>
      <Dropdown.Menu>
        <Dropdown.Item href="https://google.com">Google</Dropdown.Item>
        <Dropdown.Item href="https://duckduckgo.com">DuckDuckGo</Dropdown.Item>
        <Dropdown.Item href="https://yahoo.com">Yahoo</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ))
  .add('with icon element', () => (
    <Dropdown>
      <Dropdown.Button>
        <Icon className="fa fa-user pr-3" alt="" />
        Search Engines
      </Dropdown.Button>
      <Dropdown.Menu>
        <Dropdown.Item href="https://google.com">Google</Dropdown.Item>
        <Dropdown.Item href="https://duckduckgo.com">DuckDuckGo</Dropdown.Item>
        <Dropdown.Item href="https://yahoo.com">Yahoo</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ))
  .add('with caret/chevron', () => (
    <React.Fragment>
      <Dropdown className="mb-3">
        <Dropdown.Button>
          Search Engines
          <Icon className="fa fa-caret-down pl-3" alt="" />
        </Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.Item href="https://google.com">Google</Dropdown.Item>
          <Dropdown.Item href="https://duckduckgo.com">DuckDuckGo</Dropdown.Item>
          <Dropdown.Item href="https://yahoo.com">Yahoo</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Button>
          Search Engines
          <Icon className="fa fa-angle-down pl-3" alt="" />
        </Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.Item href="https://google.com">Google</Dropdown.Item>
          <Dropdown.Item href="https://duckduckgo.com">DuckDuckGo</Dropdown.Item>
          <Dropdown.Item href="https://yahoo.com">Yahoo</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </React.Fragment>
  ));
