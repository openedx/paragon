const React = require('react');
const { SettingsContextProvider } = require('./src/context/SettingsContext');

// wrap whole app in settings context
exports.wrapRootElement = ({ element }) => <SettingsContextProvider>{element}</SettingsContextProvider>;

exports.onRouteUpdate = ({ location: { hash, pathname, href } }) => {
  if (hash) {
    setTimeout(() => {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: pathname.startsWith('/components/') ? element.offsetTop : element.offsetTop - 75 })
      }
    }, 0);
  }
}
