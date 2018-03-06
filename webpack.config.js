var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './index.js',
    appStyles: [
      './mystyles.css'
    ],
    vendor: [
        'jquery',
    ],
  },
  output: {
    filename: '[chunkhash].[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
          },
        }),
      },
      {
          test: /\.csv$/,
          loader: 'csv-loader',
          options: {
              dynamicTyping: true,
              header: true,
              skipEmptyLines: true
          }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      hash: true,
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        Popper: ['popper.js', 'default'],
    }),
    new ExtractTextPlugin({
      filename: '[chunkhash].[name].css',
      disable: false,
      allChunks: true,
    }),
  ],
};