const path = require('path');

module.exports = {
  entry: "./app/assets/js/App.js",
  output: {
    path: path.resolve(__dirname, './app/temp/js'),
    filename: 'App.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
