import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';


import README from './README.md';

import Hyperlink from './index';
import Icon from '../Icon/index';


const onClick = (event) => {
  console.log(`onClick fired for ${event.target}`);

  action('HyperLink Click');
};

storiesOf('Basics|HyperLink', module)
  .addParameters({ info: { text: README } })
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
