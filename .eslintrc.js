module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    // 'prettier',
    // 'eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    // 'no-console': 'error',
    // 'no-unused-vars': 'off',
    // 'linebreak-style': ['error', 'windows'],
    // indent: 'off',
  },
};
