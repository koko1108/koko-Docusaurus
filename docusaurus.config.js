const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "koko",
    tagline: "技術學習筆記",
    url: "https://github.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "koko",
    projectName: "koko-Docusaurus",
    i18n: {
      defaultLocale: "zh-Hant-TW",
      locales: ["zh-Hant-TW"],
      localeConfigs: {
        "zh-Hant-TW": {
          label: "繁體中文",
        },
      },
    },
    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            routeBasePath: "/",
            // homePageId: 'intro',
            // Please change this to your repo.
            // editUrl:
            //   "https://github.com/facebook/docusaurus/edit/main/website/",
          },
          // blog: {
          //   showReadingTime: true,
          //   // Please change this to your repo.
          //   editUrl:
          //     "https://github.com/facebook/docusaurus/edit/main/website/blog/",
          // },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          // 深淺色配置
          disableSwitch: false,
          defaultMode: "dark",
          respectPrefersColorScheme: true,
        },
        navbar: {
          // 導覽列
          title: "koko's",
          logo: {
            alt: "My Site Logo",
            src: "img/logo.svg",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Docs",
            },
            // { to: "/blog", label: "Blog", position: "left" },
            {
              href: "https://vocus.cc/user/67209b92fd89780001f41762",
              label: "vocus",
              position: "right",
              target: "_blank",
            },
            {
              href: "https://github.com/koko1108",
              "aria-label": "GitHub repository",
              className: "header-github-link",
              title: "GitHub",
              position: "right",
              target: "_blank",
            },
          ],
        },
        footer: {
          style: "dark",
          copyright: `Copyright © ${new Date().getFullYear()} koko's, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          defaultLanguage: "javascript",
        },
      }),
  }
);
