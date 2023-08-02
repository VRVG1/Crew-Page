/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
        PT_Serif: "'PT Serif', serif",
      },
    },
  },
  plugins: [],
}
