import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["test/**"],
  },

  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",

      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "off",
      "no-undef": "error",
      "no-dupe-keys": "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-return-await": "error",
    },
  },
];
