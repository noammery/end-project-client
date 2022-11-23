/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('./images/dimona-logo.png')",
      },
      backgroundSize: {
        small: "30%",
      },
      fontFamily: {
        varela: ["Varela Round", "sans-serif"],
      },
      spacing: {
        150: "40rem",
      },
    },
  },
  plugins: [require("tailwindcss-rtl"), require("tailwind-scrollbar-hide")],
};
