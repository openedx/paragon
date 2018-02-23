import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';

import CssJail from '../src/CssJail';

setDefaults({
  inline: false,
  header: true,
  source: true,
});

setTimeout(() => setOptions({
  name: '💎 PARAGON',
  url: 'https://github.com/edx/paragon',
  showDownPanel: true,
  downPanelInRight: true,
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
