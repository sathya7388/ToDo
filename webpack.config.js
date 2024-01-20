const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: path.join (__dirname, '/build'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './build',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: './index.html',
    }),
  ],
};
