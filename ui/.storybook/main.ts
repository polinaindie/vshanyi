import type { StorybookConfig } from '@storybook/react-vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname = path.dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-mcp',
  ],
  framework: '@storybook/react-vite',
  async viteFinal(config) {
    config.resolve ??= {}
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(dirname, '../src'),
      '@brand': path.resolve(dirname, '../../brand'),
      '@fonts': path.resolve(dirname, '../../fonts'),
      '@img': path.resolve(dirname, '../../img'),
    }
    config.server ??= {}
    config.server.fs ??= {}
    config.server.fs.allow = [
      ...(config.server.fs.allow ?? []),
      path.resolve(dirname, '..'),
      path.resolve(dirname, '../../fonts'),
      path.resolve(dirname, '../../brand'),
    ]
    return config
  },
}

export default config
