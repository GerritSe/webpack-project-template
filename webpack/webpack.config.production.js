const config = require('./webpack.config.base')
const webpack = require('webpack')

config.plugins = config.plugins || []
config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compressor: { warnings: true },
    sourceMap: false
  }),
  new webpack.optimize.OccurrenceOrderPlugin()
)

module.exports = config
