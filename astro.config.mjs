// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://emasuriano.github.io',
  base: 'intimacy-calendar',
  vite: {
    plugins: [tailwindcss()],
  },
});
