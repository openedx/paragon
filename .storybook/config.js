import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import CssJail from '../src/CssJail';

setTimeout(() => setOptions({
  name: '💎 PARAGON',
  url: 'https://github.com/edx/paragon',
  showDownPanel: true,
}), 1000);

const req = require.context('../src', true, /\.stories\.jsx$/);

addDecorator(story => (
  <CssJail>
    {story()}
  </CssJail>
));

function loadStories() {
  require('./Paragon.stories.jsx');
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
