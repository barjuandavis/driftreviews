import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: 'https://driftreviews.online',
  integrations: [react(), mdx(), sitemap(), tailwind()],
  adapter: node({
    mode: "standalone"
  })
});