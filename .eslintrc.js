module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'module-resolver'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'react-app',
    'airbnb',
    'airbnb/hooks',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: [
      './tsconfig.build.json',
      './packages/**/tsconfig.build.json',
    ],
    tsconfigRootDir: './',
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        directory: [
          './tsconfig.build.json',
          './packages/*/tsconfig.build.json',
        ],
      },
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
