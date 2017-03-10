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
      }
    ]
  },
  resolve: {
    alias: {
      'app': path.resolve(__dirname, '..', 'src')
    }
  }
};

module.exports = config
