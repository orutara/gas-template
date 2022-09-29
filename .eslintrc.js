module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    "googleappsscript/googleappsscript": true
  },
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: [
    "@typescript-eslint",
    "googleappsscript"
  ],
  rules: {},
  extends: [
    "prettier"
  ],
};
