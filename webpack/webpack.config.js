const path = require('path')
const env = require('./env')
const developmentConfig = require('./webpack.config.development')
const productionConfig = require('./webpack.config.production')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  module: {
    rules:[{
      test: /\.js$/,
      include: path.resolve(__dirname, '..', 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }]
    }]
  }
};

(env.production ? productionConfig : developmentConfig).applyConfiguration(config)

module.exports = config
