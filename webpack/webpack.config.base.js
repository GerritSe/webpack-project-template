const path = require('path')

const config = {
  entry: ['./src/index.ts'],
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
      }, {
        test: /\.ts$/,
        include: path.resolve(__dirname, '..', 'src'),
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  }
};

module.exports = config
