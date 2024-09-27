/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Adding fonts
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
        Everett: ["Everett", "sans-serif"],
      },
    },
  },
  plugins: [],
};
