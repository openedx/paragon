const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
  devtool: 'source-map',
  entry: {
    paragon: path.resolve('./src/index.js'),
  },
  output: {
    filename: `${config.baseDirectory}/index.js`,
    library: 'paragon',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
    }),
    new ExtractTextPlugin(`${config.baseDirectory}/paragon.min.css`),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
          },
          { loader: 'source-map-loader' },
        ],
      },
      {
        test: /\.scss|\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: config.localIdentName,
                sourceMap: true,
                minimize: true,
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
                sourceMap: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          outputPath: `${config.baseDirectory}/`,
        },
      },
    ],
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
    'react-transition-group': {
      root: 'ReactTransitionGroup',
      commonjs2: 'react-transition-group',
      commonjs: 'react-transition-group',
      amd: 'react-transition-group',
    },
  }],
}));
