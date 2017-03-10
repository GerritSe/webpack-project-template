const webpack = require('webpack')

class WebpackProductionConfiguration {
  static applyConfiguration(config) {
    config.plugins = config.plugins || []

    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compressor: { warnings: true },
        sourceMap: false
      }),
      new webpack.optimize.OccurrenceOrderPlugin()
    )
  }
}

module.exports = WebpackProductionConfiguration
