const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


// we build the library for two different build targets:
// static (with scoped styles) and themeable (with stock,
// overrideable classnames)
const targetProperties = [{
  baseDirectory: 'static',
  localIdentName: 'paragon__[local]',
},
{
  baseDirectory: 'themeable',
  localIdentName: '[local]',
}];

module.exports = targetProperties.map(config => ({
  entry: './src/index.js',
  output: {
    filename: `${config.baseDirectory}/index.js`,
    library: 'paragon',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
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
  },
  plugins: [
    new UglifyJsPlugin(),
    new MiniCssExtractPlugin({
      filename: `${config.baseDirectory}/paragon.min.css`,
    }),
    new CleanWebpackPlugin(), // Cleans the dist directory before each build
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
            options: {
              modules: true,
              localIdentName: config.localIdentName,
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
      {
        test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          outputPath: config.baseDirectory,
        },
      },
    ],
  },
}));
