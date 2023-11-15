/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#161616",
        primary: "#EDEDED",
        secondary: "#A0A0A0",
      },
    },
  },
  plugins: [],
};
