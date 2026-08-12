// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// TODO: replace with your real domain before deploying. This is required for
// the sitemap, the RSS feed's item links, and canonical/OG URLs to be correct.
const SITE_URL = "https://example.com";

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
