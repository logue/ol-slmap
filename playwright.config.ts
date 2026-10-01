import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.e2e.ts',
  use: {
    baseURL: 'http://127.0.0.1:4173/ol-slmap/'
  },
  webServer: {
    command: 'pnpm exec rs dev --host 127.0.0.1 --port 4173',
    url: 'http://127.0.0.1:4173/ol-slmap/',
    reuseExistingServer: true
  }
});
