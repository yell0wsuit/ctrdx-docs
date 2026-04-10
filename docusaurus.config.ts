import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "Cut the Rope\: DX Docs",
    tagline: "Codebase documentation for Cut the Rope DX",
    favicon: "img/favicon.png",

    future: {
        v4: true,
    },

    url: "https://yell0wsuit.github.io",
    baseUrl: "/ctrdx-docs/",

    onBrokenLinks: "throw",

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    markdown: {
        format: "detect",
    },

    themes: [
        [
            "@easyops-cn/docusaurus-search-local",
            {
                hashed: true,
                docsRouteBasePath: "/",
                explicitSearchResultPath: true,
            },
        ],
    ],

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    routeBasePath: "/",
                },
                blog: false,
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        colorMode: {
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: "Cut the Rope\: DX Docs",
            logo: {
                alt: "Cut the Rope DX",
                src: "img/logo.png",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "docsSidebar",
                    position: "left",
                    label: "Docs",
                },
            ],
        },
        footer: {
            style: "dark",
            copyright: `Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
