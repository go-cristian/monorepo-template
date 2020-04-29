module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'module-resolver',
    'cypress',
    'chai-friendly',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'airbnb',
    'airbnb/hooks',
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    'cypress/globals': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: { },
      'babel-module': {},
    },
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-extraneous-dependencies': [2, {
      devDependencies: [
        '**/test.tsx',
        '**/test.ts',
        '**/*.config.js',
        '**/*.spec.js',
        '**/webpack.*.js',
      ],
    }],
    '@typescript-eslint/indent': [2, 2],
    semi: ['error', 'never'],
    quotes: [2, 'single'],
    'no-console': 2,
    'no-multi-spaces': ['error'],
    'no-empty-function': [2, { allow: ['arrowFunctions'] }],
    'import/extensions': [2, 'never'],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'import/no-unresolved': 'error',
    '@typescript-eslint/no-var-requires': 'off',
  },
}
