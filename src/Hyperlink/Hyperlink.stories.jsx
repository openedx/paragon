/* eslint-disable import/no-extraneous-dependencies, no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { setConsoleOptions } from '@storybook/addon-console';
import { withReadme } from 'storybook-readme';

import Hyperlink from './index';
import README from './README.md';

setConsoleOptions({
  panelExclude: ['warn', 'error'],
});

const onClick = (event) => {
  console.log(`onClick fired for ${event.target}`);

  action('HyperLink Click');
};

storiesOf('HyperLink', module)
  .add('minimal usage', withReadme(README, () => (
    <Hyperlink
      destination="https://en.wikipedia.org/wiki/Hyperlink"
      content="edX.org"
    />
  )))
  .add('with blank target', withReadme(README, () => (
    <Hyperlink
      destination="https://www.edx.org"
      content="edX.org"
      target="_blank"
    />
  )))
  .add('with onClick', withReadme(README, () => (
    <Hyperlink
      destination="https://www.edx.org"
      content="edX.org"
      target="_blank"
      onClick={onClick}
    />
  )))
  .add('with icon as content', withReadme(README, () => (
    <Hyperlink
      destination="https://www.edx.org"
      content={(<span className="fa fa-book" />)}
    />
  )));
