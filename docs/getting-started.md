# Getting Started

## Requirements

 - Vue 3.0+
 - Tailwind CSS
 - Storybook

## Install package 

```sh
npm install storybook-tailwind-fundations
```

## Adapt `./storybook/main.js`
```js
const path = require('path');
const tailwindConfigPath = path.join(__dirname, '../tailwind.config.js'); // or your own config file
require('storybook-tailwind-foundations/initialize.js')
  .default(tailwindConfigPath);

module.exports = {
   // ...
  stories: [
    // ... 
    '../node_modules/storybook-tailwind-foundations/**/*.stories.js'
  ],
}
```

## Start Storybook

::: warning
If you make any change to the tailwind config, you need to restart storybook to see the changes.
:::

Now you can start storybook and the `Foundations` section should appear in the sidebar.

## Preview

![Example](./images/storybook-tailwind-foundations.gif)
