/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#252526",
        purple: "#8666db",
        grey: "#f9fafc",
        chalk: "#c1cacf",
        greyishblack: "#434344",
        blue: "#1698f4",
        pink: "#fae5e5",
        lightpurple: "rgba(118, 84, 187, 0.8689600840336135)",
      },

      backgroundColor: {},
    },
  },
  plugins: [],
};
