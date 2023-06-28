module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "eslint-comments",
    "filenames",
    "import",
    "new-with-error",
    "prettier",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "prettier",
  ],
  env: {
    node: true,
    jest: true,
  },
  globals: {
    process: true,
  },
  settings: {
    ...require("./src/base/settings/import"),
  },
  rules: {
    ...require("./src/base/rules/eslint"),
    ...require("./src/base/rules/filenames"),
    ...require("./src/base/rules/import"),
    ...require("./src/base/rules/new-with-error"),
    ...require("./src/base/rules/prettier"),
    ...require("./src/base/rules/typescript-eslint"),
  },
  overrides: [...require("./src/base/overrides")],
};
