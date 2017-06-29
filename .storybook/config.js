import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: '💎 PARAGON',
  url: 'https://github.com/edx/paragon',
  showDownPanel: false,
});

const req = require.context('../src', true, /\.stories\.jsx$/);

function loadStories() {
  require('./Paragon.stories.jsx');
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
