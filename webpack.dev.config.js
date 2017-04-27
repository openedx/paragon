const path = require('path');

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve('./doc'),
    historyApiFallback: true,
    stats: {
      chunks: false
    }
  },
  entry: {
    main: './doc/App.js'
  },
  node: {
    fs: 'empty'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('./doc'),
    libraryTarget: 'umd'
  },
  // plugins: [
  //   new CleanWebpackPlugin(['build']),
  //   new CopyWebpackPlugin([{ from: './docs/static', to: 'assets' }]),
  //   new webpack.DefinePlugin({
  //     'process.env.NODE_ENV': JSON.stringify(env)
  //   }),
  //   new webpack.optimize.OccurenceOrderPlugin(),
  //   new StaticSiteGeneratorPlugin('main', paths, {}),
  //   new webpack.NoErrorsPlugin(),
  //   new ExtractTextPlugin("/assets/style.css")
  // ],
  module: {
    loaders: [
      // {
      //   test: /\.json$/,
      //   loaders: [
      //     'json-loader?cacheDirectory'
      //   ]
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader?cacheDirectory'
        ]
      },
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      // },
    ]
  },
  // resolve: {
  //   extensions: ['', '.js', '.json'],
  //   alias: {
  //     'bootstrap-css': path.join(__dirname,'node_modules/bootstrap/dist/css/bootstrap.css'),
  //     reactstrap: path.resolve('./src')
  //   }
  // }
};
