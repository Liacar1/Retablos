import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://liacar1.github.io/Retablos',
  base: '/Retablos/',
  outDir: './dist',
  build: {
    assets: 'assets'
  }
});
