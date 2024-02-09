import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), alpinejs(), icon()]
});