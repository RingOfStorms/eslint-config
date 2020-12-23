# Eslint Config

# Notable linting rules
- No default exports
- No relative imports from other modules, imports must be exported in an index file
- Index files only contain imports/exports, no other code

# Usage

## base

Base is used for node/typescript and excludes react specific settings.

```
npm i @ringofstorms/eslint-config \
    @typescript-eslint/eslint-plugin \
    eslint \
    eslint-plugin-eslint-comments \
    eslint-plugin-import \
    eslint-plugin-new-with-error \
    eslint-plugin-prettier \
    prettier \
    --save-dev
```

In your .eslintrc
```
{
  extends: ["@ringofstorms/eslint-config/base"],
}
```

## react
React is for react/typescript and is base + react specific settings.

```
npm i @ringofstorms/eslint-config \
    @typescript-eslint/eslint-plugin \
    eslint \
    eslint-plugin-eslint-comments \
    eslint-plugin-import \
    eslint-plugin-new-with-error \
    eslint-plugin-prettier \
    prettier \
    eslint-plugin-css-modules \
    eslint-plugin-react \
    eslint-plugin-react-hooks \
    --save-dev
```

In your .eslintrc
```
{
  extends: ["@ringofstorms/eslint-config/react"],
}
```

# Common rule overrides

```
{
  rules: {
    // This will differ for every project and may not even need any settings
    "import/no-internal-modules": ["error", {
      allow: ["rxjs/**", "uuid/**", "@nestjs/**"]
    }],
  },
}
```