/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "theme-white": "hsl(0, 0%, 100%)",
        "theme-light-gray": "hsl(212, 45%, 89%)",
        "theme-grayish-blue": "hsl(220, 15%, 55%)",
        "theme-dark-blue": "hsl(218, 44%, 22%)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
