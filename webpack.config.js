const path = require('path');

module.exports = {
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'better-curry',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
}