const path = require('path')

const config = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: {
          loader: 'eslint-loader',
        }
      }, {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }, {
        test: /\.ts$/,
        include: path.resolve(__dirname, '..', 'src'),
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'app': path.resolve(__dirname, '..', 'src')
    },
    extensions: ['.js', '.ts']
  }
};

module.exports = config
