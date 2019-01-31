const baseConfig = require('./jest.config')

module.exports = Object.assign({}, baseConfig, {
  setupFiles: ['./setup-enzyme'],
  testMatch: ['**/__tests_enzyme__/*'],
})
