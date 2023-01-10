module.exports = {
  // === DISABLED ===
  // ==== ERRORS ====
  curly: "error",
  "sort-imports": [
    "error",
    {
      ignoreDeclarationSort: true,
    },
  ],
  "no-underscore-dangle": ["error", { allowAfterThis: true }], // using underscores as an alternative to mark methods as private. This way we can still write tests for methods
};
