module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/experimental-script-setup-vars': 'off',
    'no-underscore-dangle': 'off',
    'max-len': [
      'warn',
      {
        'code': 120,
        'ignoreTrailingComments': true,
      },
    ],
    'new-cap': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
