/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';

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

storiesOf('Breadcrumb', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(centered)
  .addDecorator(checkA11y)
  .addDecorator(withReadme(README))
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
