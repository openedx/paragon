// List of themes that are available for usage across the docs site
// Each theme is represented by object with following attributes:
//  1. id - unique identifier of a theme
//  2. label - Label of the theme which will be shown in the selector in the header
//  3. Name of the theme's stylesheet (without extension), it's assumed that stylesheet
//     is located in 'src/scss/' directory. The stylesheet will be compiled into CSS
//     and placed into ./public/static/ directory under <stylesheet>.css name
//  4. pathToVariables - path to SCSS variables of the theme, values from which will be
//     displayed on components' pages if they override default ones, the path should be
//     specified relative to node_modules.
const THEMES = [
  {
    id: 'openedx',
    label: 'Open edX',
    stylesheet: 'openedx-theme',
    pathToVariables: undefined,
  },
  {
    id: 'edxorg',
    label: 'edX',
    stylesheet: 'edxorg-theme',
    pathToVariables: '@edx/brand-edx.org/paragon/_variables.scss',
  },
];

const DEFAULT_THEME = 'openedx';

module.exports = {
  THEMES,
  DEFAULT_THEME,
};
