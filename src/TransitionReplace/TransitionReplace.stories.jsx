import React from 'react';
import { storiesOf } from '@storybook/react';

import TransitionReplace from './index';
import README from './README.md';

import DemoTransitionReplace from './DemoTransitionReplace';

storiesOf('TransitionReplace', module)
  .addParameters({ info: { text: README, source: false } })
  .add('basic usage', () => (
    <React.Fragment>
      <DemoTransitionReplace />
      <TransitionReplace />
    </React.Fragment>
  ));
