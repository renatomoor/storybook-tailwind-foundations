import { defineConfig } from 'vitepress';

const pjson = require('../../package.json');

export default defineConfig({
  base: '/storybook-tailwind-foundations/',

  themeConfig: {
    title: 'Tailwind Foundations',
    siteTitle: 'Tailwind Foundations',
    description: 'Cariboo Styleguide developer documentation',

    nav: [
      {
        text: 'Version ' + pjson.version,
        link: '/changelog',
      },
      { text: 'Storybook', link: 'https://cariboo.pages.spcs.one/cariboo-styleguide' },
    ],
    sidebar: [
      {
        text: 'Introduction',
        collapsible: true,
        items: [{ text: 'Getting Started', link: '/getting-started' }],
      },
      {
        text: 'About',
        collapsible: true,
        collapsed: true,
        items: [{ text: 'Team', link: '/team' }],
      },
    ],
    footer: {
      message: 'Made with ❤️ by Renato Moor | Version ' + pjson.version,
      copyright: 'Copyright © 2022-present',
    },
    editLink: {
      pattern: 'https://gitlab.spcs.one/cariboo/cariboo-styleguide/-/tree/main/docs/:path',
      text: 'Edit this page on Gitlab',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://gitlab.spcs.one/cariboo/cariboo-styleguide',
      },
    ],
  },
});
