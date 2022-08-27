import { defineConfig } from 'vitepress';

const pjson = require('../../package.json');

export default defineConfig({
  base: '/storybook-tailwind-foundations/',

  themeConfig: {
    title: 'SB Tailwind Foundations',
    siteTitle: 'SB Tailwind Foundations',
    description: 'Tailwind Foundations storybook documentation',

    nav: [
      {
        text: 'Version ' + pjson.version,
        link: '/changelog',
      },
      { text: 'Example', link: 'https://renatomoor.github.io/storybook-tailwind-foundations/example/' },
    ],
    sidebar: [
      {
        text: 'Doc',
        collapsible: true,
        items: [{ text: 'Getting Started', link: '/getting-started' }],
      },
      {
        text: 'About',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'Changelog ' + pjson.version,
            link: '/changelog',
          },
          { text: 'Team', link: '/team' },
        ],
      },
    ],
    footer: {
      message: 'Made with ❤️ by Renato Moor | Version ' + pjson.version,
      copyright: 'Copyright © 2022-present',
    },
    editLink: {
      pattern: 'https://github.com/renatomoor/storybook-tailwind-foundations/tree/main/docs/:path',
      text: 'Edit this page on Github',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/renatomoor/storybook-tailwind-foundations/tree/main',
      },
    ],
  },
});
