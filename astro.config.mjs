import { defineConfig } from 'astro/config'; // Added '/config' explicitly
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://elevatewithandy.com',
  base: '/',
  integrations: [tailwind()],
});