import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // Configuración para GitHub Pages
  // URL: https://liacar1.github.io/Retablos/
  base: '/Retablos/',
  build: {
    assets: 'assets'
  }
});
 