import React from 'react';
import { storiesOf } from '@storybook/react';

import TransitionReplace from './index';
import README from './README.md';

storiesOf('TransitionReplace', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <TransitionReplace>
      Content
    </TransitionReplace>
  ));
