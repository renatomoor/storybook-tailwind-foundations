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
const sbTwConfigFoundations = require("../src/bin/config");
// initialize process
sbTwConfigFoundations.initialize()

module.exports = {
   // ...
  stories: [
    // ... 
    '../node_modules/storybook-tailwind-foundations/**/*.stories.js'],
  env: (config) => ({
      ...config,
      // access the config object
      STORYBOOK_TAILWIND: sbTwConfigFoundations.getConfig(),
   }),
}
```

## Start Storybook

::: warning
If you make any change to the tailwind config, you need to restart storybook to see the changes.
:::

Now you can start storybook and the `Foundations` section should appear in the sidebar.

## Preview

![Example](./images/storybook-tailwind-foundations.gif)
