module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "3/10": "30%",
        "5/9": "55.5555556%",
        "5/11": "45.4545455%",
      },
      colors: {
        darkModeElements: "hsl(209, 23%, 22%)",
        darkModeBackground: "hsl(207, 26%, 17%)",
        lightModeText: "hsl(200, 15%, 8%)",
        lightModeBackground: "hsl(0, 0%, 98%)",
        darkModeTextAndDarkModeElements: "hsl(0, 0%, 100%)",
        salmon: "#fd8c73",
        sun: "#fc9601",
      },
      fontFamily: {
        Nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
