const path = require('path')

const config = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: path.resolve(__dirname, '..', 'src'),
        use: {
          loader: 'eslint-loader',
        }
      }, {
        test: /\.js$/,
        include: path.resolve(__dirname, '..', 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
};

module.exports = config
