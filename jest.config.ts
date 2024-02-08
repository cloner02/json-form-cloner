export default {
  testEnvironment: 'jsdom',
  setupFiles: ['./dist-node/index.js'],
  verbose: true,
  preset: 'ts-jest',
  transform: {},
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/tests/jest/__mocks__/styleMock.ts'
  }
}
