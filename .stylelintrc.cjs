module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-recommended-vue'
  ],
  rules: {
    'color-named': 'never',
    'color-hex-length': 'long'
  }
}
