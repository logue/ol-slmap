import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from '@rsbuild/core';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  plugins: [pluginSass()],
  html: {
    template: './index.html',
  },
  source: {
    entry: {
      index: './src/main.js',
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
