import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // Si vas a subir a GitHub Pages, usa el nombre de tu repositorio
  // Si es para desarrollo local, comenta esta línea
  // base: '/nombre-de-tu-repositorio/',
});
