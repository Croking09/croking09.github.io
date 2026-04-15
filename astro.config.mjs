// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "astro-sitemap";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://croking09.github.io",
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});