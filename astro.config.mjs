import { defineConfig } from 'astro/config'; // https://astro.build/config

import solidJs from "@astrojs/solid-js";
import react from "@astrojs/react";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), react(), preact()]
});