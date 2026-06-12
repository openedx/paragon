const path = require('path');
const { createConfig } = require('@openedx/frontend-build');

const config = createConfig('webpack-dev');
const resolvedAlias = {};

// When frontend-build tries to resolve aliases defined in module.config.js file
// it tries to also resolve their peerDependencies by creating additional aliases for them that
// point to MFE's node_modules, which we do not have since we use npm workspaces in this repo.
// This loop will simply step out of `example` app's directory and point to Paragon's node_modules
// for every alias that frontend-build configured to point to `examples`'s app node_modules.
Object.entries(config.resolve.alias).forEach(([key, pathInNodeModules]) => {
  resolvedAlias[key] = pathInNodeModules.replace('example/', '');
});

config.resolve.alias = resolvedAlias;

// frontend-build's loaders (style-loader, etc.) may be nested in its own node_modules
// rather than hoisted, so tell webpack where to find them.
config.resolveLoader = {
  ...config.resolveLoader,
  modules: [
    ...((config.resolveLoader && config.resolveLoader.modules) || ['node_modules']),
    path.resolve(__dirname, 'node_modules/@openedx/frontend-build/node_modules'),
  ],
};

// Serve Paragon's built theme stylesheets (dist/light.min.css, dist/dark.min.css)
// at /paragon-dist so the ThemeSwitcher demo can swap between them via a <link>.
// Requires `make build` (or `npm run build`) at the repo root to populate ./dist.
const existingStatic = config.devServer && config.devServer.static;
const staticDirs = Array.isArray(existingStatic)
  ? [...existingStatic]
  : (existingStatic ? [existingStatic] : []);
staticDirs.push({
  directory: path.resolve(__dirname, '..', 'dist'),
  publicPath: '/paragon-dist',
});
config.devServer = { ...(config.devServer || {}), static: staticDirs };

module.exports = config;
