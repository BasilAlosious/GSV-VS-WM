// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

const MOUNT_PATH = '/gsv-vs-mystics';

// Webflow Cloud mounts this app at a subpath on the Kodex Global domain.
// `base` and `assetsPrefix` must match the deploy mount path.
// https://astro.build/config
export default defineConfig({
  base: MOUNT_PATH,
  build: {
    assetsPrefix: MOUNT_PATH,
  },
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  server: {
    host: true,
  },
});
