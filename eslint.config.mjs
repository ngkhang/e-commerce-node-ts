/*
 Author: Khang Nguyen - https://github.com/ngkhang
 Filename: eslint.config.mjs
 Lasted Update: 2026-01-16
*/
// @ts-check
import eslint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: ["eslint.config.*", "dist/**"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      // TypeScript-ESLint rules
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // Import rules
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/no-unresolved": "off",
      "import/named": "off",
      "import/extensions": "off",

      // ESLint rules
      "no-console": ["error", { allow: ["warn", "error", "info"] }],
      "no-nested-ternary": "error",
      "no-lonely-if": "warn",
      "no-undefined": "warn",
      "no-unexpected-multiline": "warn",
      "prefer-const": "error",
      "prefer-arrow-callback": "warn",
      "no-unused-vars": "off",
      "max-params": ["error", 5],
      "max-depth": ["warn", 4],

      // Stylistic rules
      "@stylistic/no-tabs": "error",
      "@stylistic/quotes": ["error", "single"],
      "@stylistic/quote-props": ["error", "consistent-as-needed"],
      "@stylistic/comma-spacing": ["error", { before: false, after: true }],
      "@stylistic/array-element-newline": [
        "error",
        { consistent: true, multiline: true },
      ],
      "@stylistic/array-bracket-newline": "error",
      "@stylistic/object-property-newline": "error",
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/semi": "error",
      "@stylistic/arrow-spacing": "error",
      "@stylistic/no-multiple-empty-lines": ["error", { max: 1 }],
      "@stylistic/indent": ["error", 2],
      "@stylistic/arrow-parens": "error",
      "@stylistic/brace-style": "error",
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/space-before-blocks": "error",
      "@stylistic/max-len": ["error", { comments: 80, code: 100 }],
    },
  },
]);
