const React = require('react');
const { SettingsContextProvider } = require('./src/context/SettingsContext');

// wrap whole app in settings context
exports.wrapRootElement = ({ element }) => <SettingsContextProvider>{element}</SettingsContextProvider>;

exports.onRouteUpdate = ({ location }) => {
  if (location.hash) {
    setTimeout(() => {
      const id = location.href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop })
      }
    }, 0);
  }
}
