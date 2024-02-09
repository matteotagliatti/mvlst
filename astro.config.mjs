import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import htmx from "astro-htmx";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), alpinejs(), icon(), htmx()],
});
