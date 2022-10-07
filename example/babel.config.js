const { getBaseConfig } = require('@edx/frontend-build');

const config = getBaseConfig('babel');

config.presets.push('@babel/preset-typescript');

module.exports = config;
