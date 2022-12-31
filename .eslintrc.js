module.exports = {
  extends: ['react-app', 'react-app/jest'],
  plugins: ['import'],
  rules: {
    'import/extensions': ['warn', 'never'],
    'import/order': ['error', { alphabetize: { order: 'asc', caseInsensitive: true } }],
    'no-nested-ternary': 'error',
  },
};
