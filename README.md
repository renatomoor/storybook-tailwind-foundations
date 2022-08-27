# Getting Started

## Requirements

- Vue 3.0+
- Tailwind CSS
- Storybook
- Storybook builder vite

## Install package

```sh
npm install storybook-tailwind-fundations
```

## Adapt `./storybook/main.js`
```js
const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('../tailwind.config.js') // replace with your own config file location
const fullConfig = resolveConfig(tailwindConfig)

module.exports = {
   // ...
  stories: [
    // ... 
    '../node_modules/storybook-tailwind-foundations/**/*.stories.js'],
  env: (config) => ({
      ...config,
      STORYBOOK_TAILWIND: fullConfig,
   }),
}
```

## Start Storybook
If you make any change to the tailwind config, you need to restart storybook to see the changes.
Now you can start storybook and the `Foundations` section should appear in the sidebar.
