/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly RESEND_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Add Cloudflare Worker Env type
type Env = {
  RESEND_API_KEY: string;
};