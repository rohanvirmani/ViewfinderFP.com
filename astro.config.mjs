// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()], 
    build: {
      rollupOptions: {
        external: ['node:async_hooks']
      }
    }
  },
  env: {
    schema: {
      RESEND_API_KEY: envField.string({context:"server", access:"secret"})
    }
  }
});