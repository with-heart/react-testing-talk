const baseConfig = require('./jest.config')

module.exports = Object.assign({}, baseConfig, {
  setupFilesAfterEnv: ['./setup-tests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/__tests_enzyme__/'],
})
