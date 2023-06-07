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
      backgroundColor: {
        radial: `background:_radial-gradient(circle,_rgba(2,0,36,0)_55%,_rgba(0,212,255,1)_100%)`,
      },
    },
  },
  plugins: [],
};
