/*
 Author: Khang Nguyen - https://github.com/ngkhang
 Filename: lint-staged.config.mjs
 Lasted Update: 2026-01-16
*/

/**
 * @see https://github.com/lint-staged/lint-staged
 * @type {import("lint-staged").Configuration}
 */
export default {
  "*.ts": ["eslint --fix"],
  "*.{md,json,yml,yaml}": ["prettier --write"],
};
