const { getBaseConfig } = require('@edx/frontend-build');

const config = getBaseConfig('webpack-dev');

config.module.rules[0].test = /\.(js|jsx|ts|tsx)$/;
config.resolve = { ...config.resolve, extensions: ['.js', '.jsx', '.ts', '.tsx', '...'] };

module.exports = config;
