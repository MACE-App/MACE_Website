// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MACE',
  tagline: 'Build, customize, audit, and deploy macOS security baselines',
  favicon: 'img/app-icon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://mace-app.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mace-app', // Usually your GitHub org/user name.
  projectName: 'mace', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/app-icon.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'MACE',
        logo: {
          alt: 'MACE Logo',
          src: 'img/app-icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/docs/features/compliance-editor',
            label: 'Features',
            position: 'left',
          },
          {
            to: '/docs/build/overview',
            label: 'Build',
            position: 'left',
          },
          {
            to: '/docs/audit/overview',
            label: 'Audit',
            position: 'left',
          },
          {
            href: 'https://github.com/mace-app/mace/releases',
            position: 'right',
            className: 'header-download-link',
            label: 'Download',
            'aria-label': 'Download',
          },
          {
            href: 'https://github.com/mace-app/mace',
            position: 'right',
            className: 'header-github-link',
            label: 'GitHub',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Features',
                to: '/docs/features/compliance-editor',
              },
              {
                label: 'Build',
                to: '/docs/build/overview',
              },
              {
                label: 'Audit',
                to: '/docs/audit/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/mace-app/mace/discussions',
              },
              {
                label: 'Report an Issue',
                href: 'https://github.com/mace-app/mace/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'MACE GitHub',
                href: 'https://github.com/mace-app/mace',
              },
              {
                label: 'MACE Download',
                href: 'https://github.com/mace-app/mace/releases',
              },
              {
                label: 'mSCP GitHub',
                href: 'https://github.com/usnistgov/macos_security',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MACE. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
