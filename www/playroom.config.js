const path = require('path');

module.exports = {
  baseUrl: '/playroom/',
  components: './playroom/components.js',
  outputPath: './public/playroom',
  frameComponent: './playroom/FrameComponent.jsx',
  themes: './playroom/themes.js',
  scope: './playroom/scope.js',
  title: 'Paragon Playground',
  widths: [576, 768, 992, 1200, 1400],
  snippets: './playroom/snippets.js',
  openBrowser: false,
  paramType: 'search',
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
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
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
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
  iframeSandbox: 'allow-scripts allow-same-origin allow-modals',
  storageKey,
  storageKey,
};
