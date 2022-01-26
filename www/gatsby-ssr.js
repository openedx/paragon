const React = require('react');
const { SettingsContextProvider } = require('./src/context/SettingsContext');

// wrap whole app in theme context
exports.wrapRootElement = ({ element }) => <SettingsContextProvider>{element}</SettingsContextProvider>;
