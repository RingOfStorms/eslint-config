module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
    'eslint-comments',
    'new-with-error',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:eslint-comments/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  globals: {
    process: true,
  },
  settings: {
    ...require('./src/base/settings/import'),
  },
  rules: {
    ...require('./src/base/rules/eslint'),
    ...require('./src/base/rules/import'),
    ...require('./src/base/rules/new-with-error'),
    ...require('./src/base/rules/prettier'),
    ...require('./src/base/rules/typescript-eslint'),
  }
};
