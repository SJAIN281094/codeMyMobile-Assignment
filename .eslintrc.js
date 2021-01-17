module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  extends: [
    'plugin:security/recommended',
    'standard',
    'prettier',
    'prettier/standard',
  ],
  plugins: ['prettier', 'security'],
  rules: {
    'promise/catch-or-return': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
      },
    ],
  },
};
