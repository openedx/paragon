module.exports = {
  components: './src',
  outputPath: './dist/playroom',
  webpackConfig: () => ({
    module: {
      rules: [{
        test: /\.jsx?$/,
        // include: __dirname,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        include: __dirname,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      ],
    },
  }),
};
