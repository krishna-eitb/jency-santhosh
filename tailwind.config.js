/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FFF9F1",
        "warm-white": "#F8F3EC",
        sand: "#E8D7C0",
        champagne: "#C6A777",
        "muted-gold": "#AA895D",
        "sea-glass": "#8EB7B1",
        "deep-sea": "#304B4B",
        ink: "#34302D",
        "muted-ink": "#756B63",
      },
      fontFamily: {
        script: ["'Great Vibes'", "'Allura'", "cursive"],
        serif: ["'Cormorant Garamond'", "'Playfair Display'", "Georgia", "serif"],
        sans: ["'DM Sans'", "Lato", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
