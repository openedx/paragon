/* eslint-disable import/no-extraneous-dependencies, no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { setConsoleOptions } from '@storybook/addon-console';
import { withInfo } from '@storybook/addon-info';
import FontAwesomeStyles from 'font-awesome/css/font-awesome.min.css';
import README from './README.md';

import Hyperlink from './index';

setConsoleOptions({
  panelExclude: ['warn', 'error'],
});

const onClick = (event) => {
  console.log(`onClick fired for ${event.target}`);

  action('HyperLink Click');
};

const wrapComponent = component => (
  withInfo({ styles: FontAwesomeStyles }, README)(() => component)
);

storiesOf('HyperLink', module)
  .add('minimal usage', wrapComponent(<Hyperlink
    destination="https://en.wikipedia.org/wiki/Hyperlink"
    content="edX.org"
  />))
  .add('with blank target', wrapComponent(<Hyperlink
    destination="https://www.edx.org"
    content="edX.org"
    target="_blank"
  />))
  .add('with onClick', wrapComponent(<Hyperlink
    destination="https://www.edx.org"
    content="edX.org"
    target="_blank"
    onClick={onClick}
  />))
  .add('with icon as content', wrapComponent(<Hyperlink
    destination="https://www.edx.org"
    content={(<span className="fa fa-book" />)}
  />));
