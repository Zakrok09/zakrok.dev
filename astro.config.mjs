import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://zakrok.dev',
  output: "server",
  integrations: [svelte(), tailwind(), sitemap()],
  server: {
    port: 8080
  },

  adapter: node({
    mode: "standalone",
  }),
});
