const path = require('path');

module.exports = {
  baseUrl: '/playroom/',
  components: '../src',
  outputPath: './public/playroom',
  frameComponent: './playroom/FrameComponent.jsx',
  themes: './playroom/themes.js',
  scope: './playroom/scope.js',
  title: 'Paragon Playground',
  processCode: './playroom/process-code.js',
  openBrowser: false,
  paramType: 'search',
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: [path.resolve('../src'), path.resolve('./playroom')],
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                presets: [
                  require.resolve('@babel/preset-env'),
                  require.resolve('@babel/preset-react'),
                  require.resolve('@babel/preset-typescript'),
                ],
                plugins: [
                  require.resolve('@babel/plugin-proposal-object-rest-spread'),
                  require.resolve('@babel/plugin-proposal-class-properties'),
                ],
              },
            },
          ],
        },
        {
          test: /.svg(\?v=\d+\.\d+\.\d+)?$/,
          issuer: /\.jsx?$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(jpe?g|png|gif)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
        },
      ],
    },
  }),
  iframeSandbox: 'allow-scripts allow-same-origin',
};
