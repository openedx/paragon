const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

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
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'babili'],
            },
          },
          { loader: 'source-map-loader' },
        ],
      },
    ],
  },
};

const additionalConfig = {
  // dev runs the doc site locally.
  dev: {
    devServer: {
      contentBase: path.resolve('./docs'),
      historyApiFallback: true,
      stats: {
        chunks: false,
      },
    },
    node: {
      fs: 'empty',
    },
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loaders: [
            'babel-loader?cacheDirectory',
          ],
        },
      ],
    },
  },
  // docs builds the doc site for production.
  docs: {
    plugins: [
      new StaticSiteGeneratorPlugin('main', [
        '/',
        '/header/',
        '/inputs/',
      ], {}),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
            },
          },
        },
      ],
    },
  },
  // production builds the library for external consumption
  production: {
    entry: path.resolve('./src/index.js'),
    output: {
      path: path.resolve('./dist'),
      filename: 'excalibur.min.js',
      library: 'excalibur',
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
