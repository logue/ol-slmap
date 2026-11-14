import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import { RsdoctorRspackPlugin } from '@rsdoctor/core';
import { define } from 'rstack';

import { readFileSync } from 'node:fs';
import path from 'node:path';

import prettierPlugin from 'eslint-config-prettier';

/** Parse package.json content */
const package_ = JSON.parse(readFileSync('./package.json', 'utf-8')) as {
  name: string;
  description: string;
  author: {
    name: string;
    email: string;
  };
  license: string;
  version: string;
  homepage: string;
};

/** Parse package.json content */
const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8')) as {
  name: string;
  description: string;
  author: {
    name: string;
    email: string;
  };
  license: string;
  version: string;
  homepage: string;
};

const buildDate = new Date().toISOString();
const bannerText = `/**
* ${packageJson.name}
*
* @description ${packageJson.description}
* @author ${packageJson.author.name} <${packageJson.author.email}>
* @license ${packageJson.license}
* @version ${packageJson.version}
* @see {@link ${packageJson.homepage}}
*/
`;

const createBuildDefines = () => ({
  'import.meta.env.APP_VERSION': JSON.stringify(packageJson.version),
  'import.meta.env.BUILD_DATE': JSON.stringify(buildDate)
});

const IGNORE_PATTERNS = [
  // AI agents skill docs.
  '**/.agent/**',
  '**/.agents/**',
  '**/.claude/**',
  '**/.cursor/**',
  '**/.windsurf/**',
  // Build intermediate artifacts.
  '**/.cache/**',
  '**/.data/**',
  '**/.mf/**',
  '**/.nitro/**',
  '**/.nuxt/**',
  '**/.pnpm/**',
  '**/.rsdoctor/**',
  '**/.rstack/**',
  // Test coverage reports.
  '**/coverage/**',
  '**/e2e/**',
  '**/playwright-report/**',
  '**/reports/**',
  '**/test-results/**',
  // Build artifacts.
  '**/demo/**',
  '**/dist/**',
  '**/docs/**',
  '**/storybook-static/**',
  '**/target/**',
  // Node modules
  '**/node_modules/**'
];

const APP_FILES = ['**/*.{ts,mts,tsx,js,mjs,jsx,json,jsonc,vue,astro,svelte}'];
const TEST_FILES = ['**/*.{test,spec}.{ts,mts,tsx,js,mjs,jsx}'];

/**
 * Rsbuild (Demo application) config
 * @see {@link https://rsbuild.rs/config | Rsbuild Config}
 */
define.app({
  plugins: [pluginTypeCheck(), pluginSass()],
  html: {
    template: './src/index.html'
  },
  source: {
    define: createBuildDefines(),
    entry: {
      index: './src/index.ts'
    },
    tsconfigPath: './tsconfig.rsbuild.json'
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src')
    }
  },
  server: {
    base: '/ol-slmap/'
  },
  tools: {
    rspack: {
      plugins: [
        // Only register the plugin when RSDOCTOR is true, as the plugin will increase the build time.
        process.env.RSDOCTOR &&
          new RsdoctorRspackPlugin({
            // plugin options
            // @see {@link https://rsdoctor.rs/guide/start/features | Rsdoctor Docs}
            output: {
              // Do not output report in dist dir.
              reportDir: '.rstack/'
            }
          })
      ].filter(Boolean)
    }
  }
});

/**
 * Rspress Config
 * To use this, you will need to install @rspress/core separately.
 *
 * @see {@link https://rstack.rs/guide/cli/doc | Doc Config}
 * @see {@link https://rspress.rs/config | Rspress Config}
 */
/*
define.doc({
  root: 'docs',
  base: `/${pkg.name}/`,
  title: pkg.name,
  description: pkg.description
});
*/

/**
 * Rstest Config
 * @see {@link https://rstest.rs/config/ | Rstest Config}
 */
define.test({
  source: {
    tsconfigPath: './tsconfig.rstest.json'
  }
});

/**
 * Rslint Config
 * @see {@link https://rslint.rs/config/ | Rslint Config}
 */
define.lint(
  ({
    globals,
    // See https://rslint.rs/config/rules-and-presets
    js,
    ts,
    reactPlugin,
    // reactHooksPlugin,
    importPlugin,
    // nodePlugin,
    promisePlugin,
    // jestPlugin,
    rstestPlugin,
    unicornPlugin,
    jsxA11yPlugin
  }) => [
    // `ignores` must live in its own object to act as a global ignore.
    {
      ignores: IGNORE_PATTERNS
    },
    {
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.nodeBuiltin
        },
        parserOptions: {
          project: [
            './tsconfig.node.json',
            './tsconfig.rsbuild.json',
            //'./tsconfig.rslib.json',
            //'./tsconfig.rspress.json',
            './tsconfig.rstest.json'
          ]
        }
      }
    },

    // Base TypeScript recommended sets.
    js.configs.recommended,
    ts.configs.strictTypeChecked,
    ts.configs.stylisticTypeChecked,
    importPlugin.configs.recommended,
    promisePlugin.configs.recommended,
    unicornPlugin.configs.recommended,
    // nodePlugin.configs.recommended,
    reactPlugin.configs.recommended,
    // reactHooksPlugin.configs.recommended,
    jsxA11yPlugin.configs.recommended,

    {
      name: 'Application',
      files: APP_FILES,
      plugins: ['@typescript-eslint', 'import', 'promise', 'unicorn'],
      rules: {
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array'
          }
        ],

        // Keep project lint behavior aligned with the previous baseline.
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],
        '@typescript-eslint/explicit-function-return-type': 'off',

        // Ignore intentionally unused identifiers with underscore prefix.
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'all',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_'
          }
        ],
        '@typescript-eslint/triple-slash-reference': 'off',
        // Use them according to the context (see AGENTS.md).
        '@typescript-eslint/consistent-type-definitions': 'off',

        // Using parent traversal is prohibited in app code. Use @/ alias instead.
        'import/no-relative-parent-imports': [
          'error',
          {
            ignore: ['^@/']
          }
        ],
        'import/order': [
          'error',
          {
            alphabetize: {
              order: 'asc'
            },
            groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
            'newlines-between': 'always',
            pathGroups: [
              {
                group: 'builtin',
                pattern:
                  '{@rsbuild/**,@rsdoctor/**,@rslint/**,@rslib/*,@rspack/**,@rstest/**,rstack,rstack/**}',
                position: 'before'
              },
              {
                group: 'internal',
                pattern: '{@/**}',
                position: 'before'
              }
            ],
            pathGroupsExcludedImportTypes: ['builtin']
          }
        ],
        // File names should, in principle, be in PascalCase, with some exceptions.
        'unicorn/filename-case': 'off',
        // `props` is the idiomatic Vue name; do not force `properties`.
        'unicorn/name-replacements': [
          'error',
          {
            replacements: {
              props: false
            }
          }
        ],
        // Vue Options API (`render()`) and webpack loaders rely on `this`.
        'unicorn/no-this-outside-of-class': 'off'
      },
      settings: {
        'import/resolver': {
          typescript: {
            project: [
              './tsconfig.node.json',
              './tsconfig.rsbuild.json',
              './tsconfig.rspress.json',
              './tsconfig.rslib.json',
              './tsconfig.rstest.json'
            ]
          }
        }
      }
    },

    {
      // Test files intentionally import from parent directories.
      name: 'Tests',
      files: TEST_FILES,
      ...rstestPlugin.configs.recommended,
      rules: {
        // The demo data for the test code should preferably be of type `any`.
        '@typescript-eslint/no-explicit-any': 'warn',
        'import/no-relative-parent-imports': 'off'
      }
    },
    {
      // Since env.d.ts is a definition file, it does not check for some errors.
      name: 'env.d.ts file',
      files: ['**/env.d.ts'],
      rules: {
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'unicorn/name-replacements': 'off'
      }
    },
    // Finally, disable any conflicts with Prettier's settings.
    prettierPlugin.rules
  ]
);

/**
 * Prettier Configs
 * @see {@link https://prettier.io/docs/options | Prettier Options}
 */
define.fmt({
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  plugins: ['prettier-plugin-yaml'],
  // Vue
  vueIndentScriptAndStyle: true,
  // Bellow is rstack options
  // see https://rstack.rs/guide/formatting
  ignorePatterns: IGNORE_PATTERNS,
  sortPackageJson: true
});

/**
 * Git hooks
 * @see {@link https://rstack.rs/guide/cli/hooks | Git Hooks}
 */
define.staged({
  '*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx}': ['rs lint --fix', 'rs fmt'],
  '*.{json,jsonc,md,mdx,yml,yaml,css,scss,less,html,vue}': 'rs fmt'
});
