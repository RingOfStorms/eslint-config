module.exports = {
  // === DISABLED ===
  // This does not play nice with React.memo()
  'react/display-name': 'off',
  // ==== ERRORS ====
  'react/no-access-state-in-setstate': 'error',
  'react/no-redundant-should-component-update': 'error',
  'react/no-typos': 'error',
  'react/no-unsafe': 'error',
  'react/self-closing-comp': 'error',
  'react/jsx-no-bind': 'error',
  'react/jsx-max-depth': ['error', { max: 5 }],
  'react/jsx-curly-brace-presence': ['error', 'never'],
  'react/jsx-wrap-multilines': ['error', {
    declaration: 'parens-new-line',
    assignment: 'parens-new-line',
    return: 'parens-new-line',
    arrow: 'parens-new-line',
    condition: 'parens-new-line',
    logical: 'parens-new-line',
    prop: 'ignore',
  }],
};
