const React = require('react');
const { ThemeContextProvider } = require('./src/context/ThemeContext');

// wrap whole app in theme context
exports.wrapRootElement = ({ element }) => <ThemeContextProvider>{element}</ThemeContextProvider>;
