/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
    },
   // tailwind.config.js
extend: {
  colors: {
    navy: "#263B50",
    cream: "#F3EDE0",
  },
  fontFamily: {
    body: ['"ChefPalatino"', '"Palatino Linotype"', '"Book Antiqua"', "Palatino", "Georgia", "serif"],
    heading: ['"ChefPalatino"', '"Palatino Linotype"', '"Book Antiqua"', "Palatino", "Georgia", "serif"],
    display: ['"ChefHeading"', "sans-serif"], // <-- your Relation Two Bold (special headers only)
  },
}
  },
  plugins: [],
};
