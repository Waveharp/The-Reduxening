var webpack      = require('webpack');
var lost         = require('lost');
var rucksack     = require('rucksack-css');
var precss       = require('precss');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss']
      }
    ]
  },
  postcss: function () {
    return [
      lost,
      rucksack({autoprefixer: true}),
      precss
    ];
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: '/src'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};