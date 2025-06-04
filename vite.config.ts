import { defineConfig, type UserConfig } from 'vite';

import banner from 'vite-plugin-banner';

import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }): UserConfig => {
  const config: UserConfig = {
    base: './',
    publicDir: command === 'serve' ? 'public' : false,
    plugins: [
      // vite-plugin-banner
      // https://github.com/chengpeiquan/vite-plugin-banner
      banner(`/**
 * ${pkg.name}
 *
 * @description ${pkg.description}
 * @author ${pkg.author.name} <${pkg.author.email}>
 * @copyright 2025 By Masashi Yoshikawa All rights reserved.
 * @license ${pkg.license}
 * @version ${pkg.version}
 * @see {@link ${pkg.homepage}}
 */
`),
    ],
  };

  // Export vite config
  return config;
});
