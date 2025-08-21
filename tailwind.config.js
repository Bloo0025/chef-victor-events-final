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
    extend: {
      colors: {
        navy: "#263B50",
        cream: "#F3EDE0",
      },
      fontFamily: {
        body: ['"ChefPalatino"', '"Palatino Linotype"', '"Book Antiqua"', "Palatino", "Georgia", "serif"],
        heading: ['"ChefHeading"', "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
