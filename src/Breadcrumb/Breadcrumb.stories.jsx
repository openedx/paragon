import React from 'react';
import { storiesOf } from '@storybook/react';

import Breadcrumb from './index';
import README from './README.md';


const sampleLinks = [
  {
    label: 'Link 1',
    url: '/link-1',
  },
  {
    label: 'Link 2',
    url: '/link-2',
  },
  {
    label: 'Link 3',
    url: '/link-3',
  },
];

storiesOf('Navigation|Breadcrumb', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <Breadcrumb links={sampleLinks} />
  ))
  .add('with activeLabel', () => (
    <Breadcrumb links={sampleLinks} activeLabel="Link 4" />
  ))
  .add('with custom spacer', () => (
    <Breadcrumb
      links={sampleLinks}
      spacer={<span className="custom-spacer">/</span>}
    />
  ))
  .add('with custom click handler', () => (
    <Breadcrumb
      links={sampleLinks}
      clickHandler={(event) => {
        event.preventDefault();
        console.log(`${event.target.getAttribute('href')} clicked`); // eslint-disable-line no-console
      }}
    />
  ));
