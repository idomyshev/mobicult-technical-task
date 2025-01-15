module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  extends: [
    'eslint:recommended', // Basic ESLint rules
    'plugin:@typescript-eslint/recommended', // TypeScript-specific rules
    'plugin:nuxt/recommended', // Nuxt-specific rules
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // Shows Prettier issues as ESLint errors
  },
};
