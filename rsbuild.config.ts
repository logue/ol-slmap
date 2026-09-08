import { defineConfig } from '@rsbuild/core';
import { pluginSass } from '@rsbuild/plugin-sass';

import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [
    pluginSass(),
  ],
  html: {
    template: './src/index.html',
  },
  source: {
    entry: {
      index: './src/index.ts',
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    base: '/ol-slmap/',
  },
});
