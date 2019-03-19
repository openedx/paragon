import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'font-awesome/css/font-awesome.min.css';

import README from './README.md';

import Hyperlink from './index';
import Icon from '../Icon/index';


const onClick = (event) => {
  console.log(`onClick fired for ${event.target}`);

  action('HyperLink Click');
};

storiesOf('HyperLink', module)
  .addParameters({ info: { text: README } })
  .add('minimal usage', () => <Hyperlink destination="https://en.wikipedia.org/wiki/Hyperlink">edX.org</Hyperlink>)
  .add('with blank target', () => (
    <Hyperlink destination="https://www.edx.org" target="_blank">edX.org</Hyperlink>
  ))
  .add('with onClick', () => (
    <Hyperlink
      destination="https://www.edx.org"
      target="_blank"
      onClick={onClick}
    >
      edX.org
    </Hyperlink>
  ))
  .add('with icon as content', () => (
    <Hyperlink
      destination="https://www.edx.org"
    >
      <Icon
        id="SampleIcon"
        className={['fa', 'fa-book']}
        screenReaderText="Visit edX Home"
      />
    </Hyperlink>
  ));
