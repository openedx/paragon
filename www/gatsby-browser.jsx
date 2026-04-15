const React = require('react');
const { SettingsContextProvider } = require('./src/context/SettingsContext');
const { InsightsContextProvider } = require('./src/context/InsightsContext');
const { encodeThemesToQueryParam } = require('../lib/queryParamEncoding');

// wrap whole app in settings context
exports.wrapRootElement = ({ element }) => (
  <SettingsContextProvider>
    <InsightsContextProvider>
      {element}
    </InsightsContextProvider>
  </SettingsContextProvider>
);

exports.onRouteUpdate = ({ location: { hash, pathname, href } }) => {
  // Handle hash scrolling
  if (hash) {
    setTimeout(() => {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: pathname.startsWith('/components/') ? element.offsetTop : element.offsetTop - 75 });
      }
    }, 0);
  }

  // Preserve themes query param from localStorage
  try {
    const storageSettings = localStorage.getItem('pgn__settings');
    if (storageSettings) {
      const savedSettings = JSON.parse(storageSettings);
      const themes = savedSettings.themes || [];
      const activeIdx = savedSettings.activeThemeIndex;

      // Only preserve themes if we have custom themes (more than just the default theme)
      const hasCustomThemes = themes.some(t => !t.isDefault);

      if (hasCustomThemes) {
        const url = new URL(window.location.href);
        const currentThemesParam = url.searchParams.get('themes');

        // Only update if themes param is missing
        if (!currentThemesParam) {
          const encoded = encodeThemesToQueryParam(themes.filter(t => !t.isDefault), activeIdx || 0);

          url.searchParams.set('themes', encoded);

          // Use replaceState to avoid adding to browser history
          window.history.replaceState({}, '', url.toString());
        }
      }
    }
  } catch (error) {
    // Silently handle any localStorage or parsing errors
    // eslint-disable-next-line no-console
    console.warn('Error preserving themes query param:', error);
  }
};
