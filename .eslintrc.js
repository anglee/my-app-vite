module.exports = {
  extends: ['react-app', 'react-app/jest', 'plugin:@tanstack/eslint-plugin-query/recommended'],
  plugins: ['import'],
  rules: {
    'import/extensions': ['warn', 'never'],
    'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }],
    'no-nested-ternary': 'error',
  },
};
