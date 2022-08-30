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
require('storybook-tailwind-foundations/initialize.js')
  .default(resolve('../tailwind.config.js')); // or your own config file

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
