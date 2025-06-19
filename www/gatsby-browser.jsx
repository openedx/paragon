const React = require('react');
const { SettingsContextProvider } = require('./src/context/SettingsContext');
const { InsightsContextProvider } = require('./src/context/InsightsContext');

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
      const customThemes = savedSettings.customThemes || [];
      const activeIdx = savedSettings.activeCustomThemeIndex || 0;
      
      if (customThemes.length > 0) {
        const url = new URL(window.location.href);
        const currentThemesParam = url.searchParams.get('themes');
        
        // Only update if themes param is missing
        if (!currentThemesParam) {
          // Import the encoding function dynamically
          const { encodeThemesToQueryParam } = require('./src/utils/queryParamEncoding');
          const encoded = encodeThemesToQueryParam(customThemes, activeIdx);
          
          url.searchParams.set('themes', encoded);
          
          // Use replaceState to avoid adding to browser history
          window.history.replaceState({}, '', url.toString());
        }
      }
    }
  } catch (error) {
    // Silently handle any localStorage or parsing errors
    console.warn('Error preserving themes query param:', error);
  }
};
