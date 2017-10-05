const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

const env = process.env.NODE_ENV || 'dev';

const base = {
  devtool: 'source-map',
  entry: {
    main: path.resolve('./docs/App.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('./docs'),
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new MinifyPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'minify'],
            },
          },
          { loader: 'source-map-loader' },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "paragon-reset";',
              includePaths: [
                path.join(__dirname, './src/utils'),
                path.join(__dirname, './node_modules'),
              ],
            },
          },
        ],
      },
    ],
  },
};

const additionalConfig = {
  // production builds the library for external consumption
  production: {
    entry: {
      Dropdown: path.resolve('./src/Dropdown.jsx'),
    },
    output: {
      path: path.resolve('./dist'),
      filename: '[name].js',
      library: 'paragon',
      libraryTarget: 'umd',
    },
    externals: [{
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
    {
      'react-addons-transition-group': {
        commonjs: 'react-addons-transition-group',
        commonjs2: 'react-addons-transition-group',
        amd: 'react-addons-transition-group',
        root: ['React', 'addons', 'TransitionGroup'],
      },
    },
    {
      'react-addons-css-transition-group': {
        commonjs: 'react-addons-css-transition-group',
        commonjs2: 'react-addons-css-transition-group',
        amd: 'react-addons-css-transition-group',
        root: ['React', 'addons', 'CSSTransitionGroup'],
      },
    }],
  },
};

module.exports = Object.assign(base, additionalConfig[env]);
