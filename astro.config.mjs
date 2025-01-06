// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://graphit-live.github.io',
  base: '/', // Since we're using a custom domain
  build: {
    assets: '_assets' // This helps with GitHub Pages caching
  }
});