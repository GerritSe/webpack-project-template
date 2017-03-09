module.exports = {
  extends: ['recommended/esnext', 'recommended/esnext/style-guide'],
  env: {
    browser: true
  },
  rules: {
    'indent': ['error', 2],
    'space-before-function-paren': ['error', 'never']
  }
}
