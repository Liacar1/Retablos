import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // Configuración para GitHub Pages
  // Cambia 'tu-repositorio' por el nombre real de tu repositorio
  base: '/Retablos/',
  build: {
    assets: 'assets'
  }
});
 