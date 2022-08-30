const { mergeConfig } = require('vite');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
require("storybook-tailwind-foundations/initialize.js")
  .default('../../tailwind.config.js');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      base: '/storybook-tailwind-foundations/example/',
      resolve: {
        alias: {
          '@': resolve('../src'),
        },
      },
    });
  },
}

