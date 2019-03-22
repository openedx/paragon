import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({ 
  storyKindRegex: /^((?!.*?Modal).)*$/,
  configPath: '.storybook/storyshots.config.js',
});

