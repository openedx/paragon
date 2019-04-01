import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from './index';
import README from './README.md';

storiesOf('Basics|Icon', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <Icon
      className={['fa', 'fa-birthday-cake', 'fa-4x']}
    />
  ))
  .add('with screenreader text', () => (
    <Icon
      id="SampleIcon"
      className={['fa', 'fa-smile-o', 'fa-4x']}
      screenReaderText="Happy Icon"
    />
  ));
