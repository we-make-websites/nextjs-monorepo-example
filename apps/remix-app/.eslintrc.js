/**
 * Specific eslint rules for this app/package, extends the base rules
 * @see https://github.com/belgattitude/nextjs-monorepo-example/blob/main/docs/about-linters.md
 */

// Workaround for https://github.com/eslint/eslint/issues/3458 (re-export of @rushstack/eslint-patch)
require('@we-make-websites/eslint-config-bases/patch/modern-module-resolution');

const {
  getDefaultIgnorePatterns,
} = require('@we-make-websites/eslint-config-bases/helpers');

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  ignorePatterns: [
    ...getDefaultIgnorePatterns(),
    'public/build',
    'api/index.js',
    'api/index.js.map',
    '.cache',
  ],
  extends: [
    '@we-make-websites/eslint-config-bases/typescript',
    '@we-make-websites/eslint-config-bases/sonar',
    '@we-make-websites/eslint-config-bases/regexp',
    '@we-make-websites/eslint-config-bases/jest',
    '@we-make-websites/eslint-config-bases/react',
    '@we-make-websites/eslint-config-bases/tailwind',
    '@we-make-websites/eslint-config-bases/rtl',
    // Specific rules for remix
    '@remix-run/eslint-config',
    // Apply prettier and disable incompatible rules
    '@we-make-websites/eslint-config-bases/prettier',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {},
  overrides: [],
};
