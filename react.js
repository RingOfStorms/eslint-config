module.exports = {
  plugins: ["react", "css-modules", "react-hooks"],
  extends: [
    "@ringofstorms/eslint-config/base",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/react",
    "plugin:css-modules/recommended",
    "prettier",
  ],
  env: {
    browser: true,
    jest: true,
    node: false,
  },
  globals: {
    process: false,
  },
  settings: {
    ...require("./src/react/settings/react"),
  },
  rules: {
    ...require("./src/react/rules/react"),
    ...require("./src/react/rules/react-hooks"),
  },
  overrides: [...require("./src/react/overrides")],
};
