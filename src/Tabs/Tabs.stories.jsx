/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';

import Tabs from './index';
import README from './README.md';

storiesOf('Tabs', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(centered)
  .addDecorator(checkA11y)
  .addDecorator(withReadme(README))
  .add('basic usage', () => (
    <Tabs
      labels={[
        'Panel 1',
        'Panel 2',
        'Panel 3',
      ]}
    >
      <div>Hello I am the first panel</div>
      <div>Hello I am the second panel</div>
      <div>Hello I am the third panel</div>
    </Tabs>
  ));
