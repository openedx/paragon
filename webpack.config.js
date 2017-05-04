const path = require('path');

module.exports = {
  devtool: 'source-map',
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
        ]
      },
    ],
  },
};
