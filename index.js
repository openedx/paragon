// Set an environment variable on the window during
// development mode of the consuming application.
// This enables the production, built version of
// Paragon to display warnings during development.
if (process.env.NODE_ENV === 'development') {
  window.PARAGON_ENV = 'development';
}

module.exports = require('./dist/paragon.js');
