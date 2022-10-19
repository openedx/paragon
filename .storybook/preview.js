import { addParameters } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addParameters({
  stylesheetToggle: {
    stylesheets: [
      { id: 'edxorg_theme', title: 'Edxorg theme', url: 'edxorg-theme.css' },
      { id: 'openedx_theme', title: 'OpenEdx theme', url: 'openedx-theme.css' }
    ],
  },
});