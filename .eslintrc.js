module.exports = {
  extends: "eslint:recommended",
  env: {
    commonjs: true,
    browser: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 6,
  },
};
