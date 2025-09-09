// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {    
    plugins: [tailwindcss()], 
    define: {
      'import.meta.env.RESEND_API_KEY': JSON.stringify(process.env.RESEND_API_KEY),
    },
   },
  adapter: cloudflare({}),
}
);