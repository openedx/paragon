const path = require('path');

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve('./docs'),
    historyApiFallback: true,
    stats: {
      chunks: false
    }
  },
  entry: {
    main: './docs/App.js'
  },
  node: {
    fs: 'empty'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('./docs'),
    libraryTarget: 'umd'
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
};
