var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

module.exports = {
  entry: './src/js/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
      rules: [
        {
          test: /\.jsx$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['es2015', 'react']
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: extractPlugin.extract({
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
          loader: 'url-loader?limit=10000',
        },
      ]
  },
  plugins: [
    extractPlugin
  ]
};
