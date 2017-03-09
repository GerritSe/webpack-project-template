class WebpackDevelopmentConfiguration {
  static applyConfiguration(config) {
    config.devtool = 'source-map'
  }
}

module.exports = WebpackDevelopmentConfiguration
