module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'next/core-web-vitals',
    'standard',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],

};
