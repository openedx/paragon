const React = require('react');
const { SettingsContextProvider } = require('./src/context/SettingsContext');

// wrap whole app in settings context
exports.wrapRootElement = ({ element }) => <SettingsContextProvider>{element}</SettingsContextProvider>;

// add default openedx theme to <head>
const headComponents = [
  <link
    key="openedx-theme"
    href="/static/openedx-theme.css"
    rel="stylesheet"
    type="text/css"
  />,
];

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(headComponents);
};
