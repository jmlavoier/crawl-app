const path = require('path');

const PATHS = {
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
};

module.exports = {
  entry: PATHS.src,
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(woff)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
    modules: [PATHS.src, 'node_modules'],
  },
  output: {
    filename: '[name].[fullhash].js',
    path: path.resolve(__dirname, PATHS.dist),
  },
};