/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        canveat: ["var(--font-canveat)"],
        inter: ["var(--font-inter)"],
      },
      backgroundImage: {
        "footer-img": "url('/imgs/footer-bg.png')",
      },
    },
  },
  plugins: [],
};
