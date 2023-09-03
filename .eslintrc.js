module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    '@typescript-eslint/no-unused-vars': ['error', { 'args': 'none' }],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'space-before-blocks': ['error', 'always'],
    'linebreak-style': 'off',
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      { 'blankLine': 'always', 'prev': ['block', 'block-like'], 'next': '*' }
    ],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};
