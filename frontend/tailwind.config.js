/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // black: "#F7F7F7",
        purple: "5B6ADD",
        grey: "#f9fafc",
        chalk: "#c1cacf",
      },
    },
  },
  plugins: [],
};
