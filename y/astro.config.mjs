// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://Liacar1.github.io',
  base: '/Retablos',
  outDir: './dist',
  build: {
    assets: 'assets'
  }
});
