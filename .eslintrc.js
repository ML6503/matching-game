'root:true';

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  extends: [
    // 'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    semi: 'off',
    'import/extensions': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    'no-new': 'off',
    'no-use-before-define': 'off',
    'max-classes-per-file': ['error', 2],
    'func-names': 'off',
    'class-methods-use-this': 'off',
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-plusplus': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
