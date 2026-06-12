import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Form } from '@openedx/paragon';

// Paragon ships each theme as a separate, self-contained stylesheet. Switching
// themes means loading the corresponding CSS — here we swap a single <link>
// between the built light and dark bundles served at /paragon-dist
// (see webpack.dev.config.js). Run `make build` at the repo root first.
const THEME_HREF = {
  light: '/paragon-dist/light.min.css',
  dark: '/paragon-dist/dark.min.css',
};

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    let link = document.getElementById('paragon-theme');
    if (!link) {
      link = document.createElement('link');
      link.id = 'paragon-theme';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    link.href = THEME_HREF[theme];
  }, [theme]);

  return (
    <Form.Switch
      checked={theme === 'dark'}
      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
    >
      Dark theme
    </Form.Switch>
  );
}

export default ThemeSwitcher;
