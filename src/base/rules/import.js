module.exports = {
  // === DISABLED ===
  // recommended is error, typescript covers this and import/named error has issues
  "import/named": "off",
  // on by default, we do NOT want export default ever.
  "import/default": "off",
  // ==== ERRORS ====
  // We will not use plugin:import/warnings because we want errors
  "import/no-duplicates": "error",
  "import/order": ["error", { "newlines-between": "always" }],
  // This will differ for every project and may not even need any settings
  // COPY this to rules of project:
  //     `"import/no-internal-modules": ["error", { allow: ["uuid/**", "@nestjs/**"] }],`
  "import/no-internal-modules": ["error"],
  "import/no-cycle": "error",
  "import/no-mutable-exports": "error",
  "import/no-default-export": "error",
};
