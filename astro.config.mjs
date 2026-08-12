// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Deployed via GitHub Pages as a project site (github.com/chitrakgangrade/personal-website
// -> chitrakgangrade.github.io/personal-website). If you later move to a custom
// domain or a root-level host (Vercel/Netlify/a "username.github.io" repo),
// update SITE_URL and set BASE_PATH to "/" -- every internal link in this
// project goes through src/utils/url.ts's withBase() so that's the only place
// that needs to change.
const SITE_URL = "https://chitrakgangrade.github.io";
const BASE_PATH = "/personal-website";

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
