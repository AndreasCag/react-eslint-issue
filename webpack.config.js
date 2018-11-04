const path = require('path');

const HTMLPlugin = require('html-webpack-plugin');

const resolve = relativePath => path.resolve(__dirname, relativePath);

module.exports = {
  mode: 'development',
  entry: {
    main: resolve('src/main'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': resolve('src'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  plugins: [
    new HTMLPlugin({
      template: resolve('src/index.html'),
    }),
  ],
};
