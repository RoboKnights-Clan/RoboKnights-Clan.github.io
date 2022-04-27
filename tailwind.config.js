module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["WorkSans", "sans-serif"],
        sansm: ["WSans-Medium", "sans-serif"],
        sanssm: ["WSans-SemiBold", "sans-serif"]
      },
      colors: {
        dark: "#242424",
        footerdark: "#101010"
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};
