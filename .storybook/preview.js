import { addParameters } from '@storybook/react';

// This import is needed for visual testing of Chromatic.
import '../www/public/static/edxorg-theme.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// Storybook addon that adds the ability to switch themes.
addParameters({
  stylesheetToggle: {
    stylesheets: [
      { id: 'edxorg_theme', title: 'Edxorg theme', url: 'edxorg-theme.css' },
      { id: 'openedx_theme', title: 'OpenEdx theme', url: 'openedx-theme.css' }
    ],
  },
});