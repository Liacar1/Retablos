// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://Liacar1.github.io',
  base: '/y',
  outDir: './dist',
  build: {
    assets: 'assets'
  }
});
