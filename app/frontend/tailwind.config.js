/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#050505",
          alt: "#070707",
          surface: "#0A0A0A",
        },
        accent: {
          DEFAULT: "#E63946",
          hover: "#F87171",
        },
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
