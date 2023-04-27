const { createConfig } = require('@edx/frontend-build');

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

module.exports = config;
