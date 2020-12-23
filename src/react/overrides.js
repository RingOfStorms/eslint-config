module.exports = [
  {
    files: ['**/*.tsx'],
    rules: {
      // [Plugin] react - disable prop type checks in typescript since we use interfaces
      'react/prop-types': 'off',

      // Allow ts-ignore in test files for easily faking data and objects
      '@typescript-eslint/ban-ts-ignore': 'off',
    },
  },
];
