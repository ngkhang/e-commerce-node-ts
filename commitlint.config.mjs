/*
 Author: Khang Nguyen - https://github.com/ngkhang
 Filename: commitlint.config.mjs
 Lasted Update: 2026-01-16
*/
import { RuleConfigSeverity } from "@commitlint/types";

/**
 * @see https://commitlint.js.org/reference/configuration.html
 * @type {import("@commitlint/types").UserConfig}
 */
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      RuleConfigSeverity.Error,
      "always",
      [ "build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test" ],
    ],
  },
  ignores: [(commit) => commit === ""],
  defaultIgnores: true,
};
