/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        qrWhite: "hsl(0, 0%, 100%)",
        qrLightGray: "hsl(212, 45%, 89%)",
        qrGrayishBblue: "hsl(220, 15%, 55%)",
        qrDarkBlue: "hsl(218, 44%, 22%)",
      },
      fontFamily: {
        qrBody: ["Outfit"],
      },
    },
  },
  plugins: [],
};
