export default {
  testEnvironment: 'jsdom',
  setupFiles: ['./dist-node/index.js'],
  verbose: true,
  preset: 'ts-jest',
  transform: { '^.+\\.html?$': 'jest-html-loader' },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform'
  }
}
