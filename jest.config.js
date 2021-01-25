module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testMatch: ["**/__tests__/**/*.ts?(x)"],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ["node_modules", "test-utils.tsx"],
};
