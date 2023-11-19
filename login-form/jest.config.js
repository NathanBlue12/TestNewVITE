// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@testing-library/jest-dom/extend-expect': '@testing-library/jest-dom',
  },
};