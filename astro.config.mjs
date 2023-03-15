import { defineConfig } from 'astro/config'; // https://astro.build/config

import solidJs from "@astrojs/solid-js";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), react()]
});