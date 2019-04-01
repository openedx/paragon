import React from 'react';
import { addParameters, addDecorator, configure } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import { withInfo } from '@storybook/addon-info';

// Style applied to all stories
import "./style.scss";

setConsoleOptions({
  panelExclude: ['warn', 'error'],
});

// Option defaults:
addParameters({
  options: {
    brandTitle: '💎 PARAGON',
    brandUrl: 'https://github.com/edx/paragon',
  },
  info: {
    inline: true,
    header: false,
    source: true,
  },
});


addDecorator(storyFn => <div className="p-5 mt-3">{storyFn()}</div>);
addDecorator(withInfo);


const req = require.context('../src', true, /\.stories\.jsx$/);

function loadStories() {
  require('./Paragon.stories.jsx');
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
