/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly RESEND_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// For Cloudflare Workers
declare namespace App {
  interface Env {
    RESEND_API_KEY: string;
  }
}

// For Astro Actions
declare module 'astro:actions' {
  interface ActionAPIContext {
    env: ImportMetaEnv & App.Env;
  }
}