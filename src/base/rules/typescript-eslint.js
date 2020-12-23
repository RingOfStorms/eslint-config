module.exports = {
  // === DISABLED ===
  // We like parameter properties, so turn them on by turning off this default inverse rule.
  '@typescript-eslint/no-parameter-properties': 'off',
  // ==== ERRORS ====
  // recommended is warn => enforcing error
  '@typescript-eslint/no-unused-vars': 'error',
  // recommended is warn => enforcing error
  '@typescript-eslint/no-explicit-any': 'error',
  // recommended is warn => enforcing error
  '@typescript-eslint/explicit-function-return-type': ['error', {
    allowExpressions: true,
    allowTypedFunctionExpressions: true
  }],
  // recommended does not configure no-public
  '@typescript-eslint/explicit-member-accessibility': ['error', {
    accessibility: 'no-public',
  }],
  '@typescript-eslint/no-extraneous-class': 'error',
};
