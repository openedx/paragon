const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: {
    paragon: './src/index.js',
    style: './src/index.scss',
  },
  output: {
    filename: '[name].js',
    library: 'paragon',
    libraryTarget: 'umd',
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
    new MiniCssExtractPlugin({
      filename: 'paragon.min.css',
    }),
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
        test: /\.scss|\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "bootstrap-variables";',
              includePaths: [
                path.join(__dirname, './src/utils'),
                path.join(__dirname, './node_modules'),
              ],
            },
          },
        ],
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
