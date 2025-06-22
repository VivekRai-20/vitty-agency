/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        vittypalette: {
          brown: "#2A1B0D",
          beige: "#DAB86F",
          maroon: "#A2686A",
          yellow: "#F0D48C",
          cream: "#F6F1E9",
        },
      },
    },
  },
  plugins: [],
};
