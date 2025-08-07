// astro.config.mjs
import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://Liacar1.github.io/Retablos/',
  base: '/Retablos/',
  outDir: './dist',
});