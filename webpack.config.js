const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: {
    paragon: './src/index.js',
  },
  optimization: {
    nodeEnv: false,
  },
  node: {
    process: false,
  },
  output: {
    filename: '[name].js',
    library: 'paragon',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    'react-transition-group': {
      commonjs: 'react-transition-group',
      commonjs2: 'react-transition-group',
      amd: 'ReactTransitionGroup',
      root: 'ReactTransitionGroup',
    },
  },
  plugins: [
    new UglifyJsPlugin(),
    // Be careful here. Our output path is the root of this project
    // so without this config, CleanWebpackPlugin will destroy the project
    // We should change the output path to dist/ in the next major version.
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets',
        },
      },
    ],
  },
};
