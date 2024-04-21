/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#161616",
        foreground: "#282828",
        border: "#343434",
        headers: "#ededed",
        text: "#a0a0a0",
      },
    },
  },
  plugins: [],
};
