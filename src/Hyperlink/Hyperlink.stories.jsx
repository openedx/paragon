/* eslint-disable import/no-extraneous-dependencies, no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { setConsoleOptions } from '@storybook/addon-console';

import Hyperlink from './index';

setConsoleOptions({
  panelExclude: ['warn', 'error'],
});

const onClick = (event) => {
  console.log(`onClick fired for ${event.target}`);

  action('HyperLink Click');
};

storiesOf('HyperLink', module)
  .add('minimal usage', () => (
    <Hyperlink
      destination={'https://en.wikipedia.org/wiki/Hyperlink'}
      content={'edX.org'}
    />
  ))
  .add('with blank target', () => (
    <Hyperlink
      destination={'https://www.edx.org'}
      content={'edX.org'}
      target={'_blank'}
    />
  ))
  .add('with onClick', () => (
    <Hyperlink
      destination={'https://www.edx.org'}
      content={'edX.org'}
      target={'_blank'}
      onClick={onClick}
    />
  ));
