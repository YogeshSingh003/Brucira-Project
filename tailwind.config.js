/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        custom: "1100px",
      },
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
        Everett: ["Everett", "sans-serif"],
        EverettBold: ["EverettBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
