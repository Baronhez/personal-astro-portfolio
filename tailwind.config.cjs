const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      "light",
      "lofi",
      "dark",
      "black",
      "valentine",
      "dracula",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
    ],
  }, 
};
