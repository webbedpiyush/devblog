// @ts-check
import { SITE } from "./src/config";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    expressiveCode({
      themes: ["red"],
      styleOverrides: {
        borderRadius: "var(--border-radius)",
        uiFontFamily: "var(--font-family-monospace)",
        uiFontSize: "var(--font-size-mini)",
        codeFontFamily: "var(--font-family-monospace)",
        codeFontSize: "0.8rem",
        frames: {
          frameBoxShadowCssValue: "var(--box-shadow)",
        },
      },
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "red",
      langs: [],
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});
