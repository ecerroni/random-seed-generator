// jest.config.js
const {defaults} = require('jest-config');
module.exports = {
  // ...
  testPathIgnorePatterns: ['.history'],
  // ...
};