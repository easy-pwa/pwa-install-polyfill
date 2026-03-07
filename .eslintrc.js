module.exports = {
  parser:  '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    "plugin:@typescript-eslint/eslint-recommended",
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'import/extensions': ['error', {
      'ts': 'never',
      'json': 'always',
      'svg': 'always'
    }],
    'class-methods-use-this': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off',
    'no-cond-assign': 'off',
    'no-useless-escape': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error', { allow: ['constructors'] }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    "@typescript-eslint/no-unsafe-function-type": 'off',
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],
    'quotes': 'error',
    'semi': 'error',
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
    }],
    'arrow-parens': ['error', 'as-needed'],
    'max-len': 'off',
  },
  'overrides': [
    {
      'files': 'src/Helper/Rule/Definition/*',
      rules: {
        'camelcase': 'off',
      }
    }
  ],
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
};
