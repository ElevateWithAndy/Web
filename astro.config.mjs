import { defineConfig } from 'astro';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://elevatewithandy.com', // Your live custom domain
  base: '/',                           // Kept at root because it's a custom domain
  integrations: [tailwind()],
});
