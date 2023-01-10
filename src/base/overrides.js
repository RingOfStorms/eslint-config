module.exports = [
  {
    files: ["*.test.ts"],
    rules: {
      "require-atomic-updates": "off", // tests do this a lot
      "no-underscore-dangle": "off", // allow testing private methods
      "@typescript-eslint/no-empty-function": "off", // allow empty functions in tests, often used in mock implementations
    },
  },
  {
    files: ["*.js", "prettier.config.js"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
    },
  },
];
