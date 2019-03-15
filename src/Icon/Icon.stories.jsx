import React from 'react';
import { storiesOf } from '@storybook/react';

import FontAwesomeStyles from 'font-awesome/css/font-awesome.min.css';
import Icon from './index';
import README from './README.md';

storiesOf('Icon', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <Icon
      className={[
        FontAwesomeStyles.fa,
        FontAwesomeStyles['fa-birthday-cake'],
        FontAwesomeStyles['fa-4x'],
      ]}
    />
  ))
  .add('with screenreader text', () => (
    <Icon
      id="SampleIcon"
      className={[
        FontAwesomeStyles.fa,
        FontAwesomeStyles['fa-smile-o'],
        FontAwesomeStyles['fa-4x'],
      ]}
      screenReaderText="Happy Icon"
    />
  ));
