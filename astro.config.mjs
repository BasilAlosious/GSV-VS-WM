// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// Webflow Cloud mounts this app at a subpath on the Kodex Global domain.
// `base` must match the deploy mount path so generated URLs resolve correctly.
// https://astro.build/config
export default defineConfig({
  base: '/gsv-vs-mystics',
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
