// List of themes that are available for usage across the docs site
// Each theme is represented by object with following attributes:
//  1. label - Label of the theme which will be shown in the selector in the header
//  2. Name of the theme's stylesheet (without extension), it's assumed that stylesheet
//     is located in 'src/scss/' directory. The stylesheet will be compiled into CSS
//     and placed into ./public/static/ directory under <stylesheet>.css name
exports.THEMES = [
  {
    label: 'Open edX (default)',
    stylesheet: 'openedx-theme',
  },
  {
    label: 'edX.org',
    stylesheet: 'edxorg-theme',
  },
];
