/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // black: "#F7F7F7",
        purple: "#8666db",
        grey: "#f9fafc",
        chalk: "#c1cacf",
      },

      backgroundColor: {},
    },
  },
  plugins: [],
};
