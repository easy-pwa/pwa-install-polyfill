const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const importPlugin = require('eslint-plugin-import');
const globals = require('globals');

module.exports = [
  { ignores: ['dist/**'] },

  // @typescript-eslint base configs (applied to all TS files they target)
  tsPlugin.configs['flat/eslint-recommended'],
  ...tsPlugin.configs['flat/recommended'],

  // Project-specific config
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
    },
    rules: {
      ...importPlugin.flatConfigs.typescript.rules,

      'import/extensions': ['error', { ts: 'never', json: 'always', svg: 'always' }],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', { arrays: 'always-multiline' }],
      'arrow-parens': ['error', 'as-needed'],
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': ['error', { allow: ['constructors'] }],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': ['error'],
    },
  },

  {
    files: ['src/Helper/Rule/Definition/*.ts'],
    rules: {
      'camelcase': 'off',
    },
  },
];
