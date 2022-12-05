/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        firstBgcolor: "#FFFBEB",
        secondBgcolor: "#495579",
        thirdBgcolor: "#263159",
      },
    },
  },

  plugins: [],
};
