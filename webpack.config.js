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
    path: __dirname,
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
    // Be careful here. Our output path is the root of this project
    // so without this config, CleanWebpackPlugin will destroy the project
    // We should change the output path to dist/ in the next major version.
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['themeable/**/*', 'static/**/*'],
    }),
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
