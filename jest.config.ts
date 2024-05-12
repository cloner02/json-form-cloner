export default {
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'jsdom',
  setupFiles: ['./dist-node/index.js'],
  verbose: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.html?$': 'jest-html-loader',
    '^.+\\.ts?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: 'tsconfig.jest.json'
      }
    ]
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform'
  }
}
