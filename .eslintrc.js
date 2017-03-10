module.exports = {
  extends: ['recommended/esnext', 'recommended/esnext/style-guide'],
  env: {
    browser: true,
    jasmine: true
  },
  rules: {
    // These raise false positives for imports in the specs
    'import/no-extraneous-dependencies': ['off'],
    'import/no-unresolved': ['off'],

    'indent': ['error', 2],
    'space-before-function-paren': ['error', 'never'],
    'template-curly-spacing': ['error', 'never']
  }
}
