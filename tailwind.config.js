/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440",
    },
    extend: {
      fontFamily: {
        custom: ["Poppins", "sans-serif"],
      },
      colors: {
        white: "#fff",
        lightGray: "#B5B5B5",
        darkGray: "#555555",
        black: "#000",
      },
    },
    plugins: [],
  },
};
