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
        sanssm: ["WSans-SemiBold", "sans-serif"],
        sansl: ["WSans-Light", "sans-serif"]
      },
      colors: {
        dark: "#242424",
        footerdark: "#101010",
        gray: {
          c8: "#c8c8c8",
          e5: "#e5e5e5",
          e9: "#e9e9e9",
          cb: "#cbcbcb",
          bf: "#bfbfbf",
          db: "#dbdbdb",
        }
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};
