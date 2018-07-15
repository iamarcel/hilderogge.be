const path = require('path');
const ExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    hilde: [
      path.resolve(__dirname, 'themes', 'hilde', 'src', 'hilde.js')
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'themes', 'hilde', 'static')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          ExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/'
          }
        }]
      },
    ]
  },
  plugins: [
    new ExtractPlugin({
      filename: '[name].css'
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
};
