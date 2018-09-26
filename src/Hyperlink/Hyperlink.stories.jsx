/* eslint-disable import/no-extraneous-dependencies, no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { setConsoleOptions } from '@storybook/addon-console';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';

import 'font-awesome/css/font-awesome.min.css';

import README from './README.md';

import Hyperlink from './index';
import Icon from '../Icon/index';

setConsoleOptions({
  panelExclude: ['warn', 'error'],
});

const onClick = (event) => {
  console.log(`onClick fired for ${event.target}`);

  action('HyperLink Click');
};

storiesOf('HyperLink', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(centered)
  .addDecorator(checkA11y)
  .addDecorator(withReadme(README))
  .add('minimal usage', () => <Hyperlink destination="https://en.wikipedia.org/wiki/Hyperlink" content="edX.org" />)
  .add('with blank target', () => (
    <Hyperlink
      destination="https://www.edx.org"
      content="edX.org"
      target="_blank"
    />
  ))
  .add('with onClick', () => (
    <Hyperlink
      destination="https://www.edx.org"
      content="edX.org"
      target="_blank"
      onClick={onClick}
    />
  ))
  .add('with icon as content', () => (
    <Hyperlink
      destination="https://www.edx.org"
      content={(
        <Icon
          id="SampleIcon"
          className={['fa', 'fa-book']}
          screenReaderText="Visit edX Home"
        />)}
    />
  ));
