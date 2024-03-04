export default {
  testEnvironment: 'jsdom',
  setupFiles: ['./dist-node/index.js'],
  verbose: true,
  preset: 'ts-jest',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
    '.+\\.html$': '<rootDir>/node_modules/html-loader'
  }
}
