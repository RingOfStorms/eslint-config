module.exports = {
  plugins: [
    'react',
    'css-modules',
    'react-hooks',
  ],
  extends: [
    '@ringofstorms/eslint-config/base',
    'plugin:react/recommended',
    'plugin:import/react',
    'plugin:css-modules/recommended',
    'prettier/react',
  ],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  globals: {
    process: true,
  },
  settings: {
    ...require('./src/react/settings/react'),
  },
  overrides: [
    ...require('./src/react/overrides'),
  ],
  rules: {
    ...require('./src/react/rules/react'),
    ...require('./src/react/rules/react-hooks'),
  },
}