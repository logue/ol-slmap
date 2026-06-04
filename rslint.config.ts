import { defineConfig, ts } from '@rslint/core';

export default defineConfig([
  {
    ignores: ['dist/**'],
  },
  ts.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
    },
  },
]);
