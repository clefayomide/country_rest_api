module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkModeElements: 'hsl(209, 23%, 22%)',
        darkModeBackground: 'hsl(207, 26%, 17%)',
        lightModeText: 'hsl(200, 15%, 8%)',
        lightModeBackground: 'hsl(0, 0%, 98%)',
        darkModeTextAndDarkModeElements: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        Nunito: ['Nunito Sans', 'sans-serif'],
       },
    },
  },
  plugins: [],
};
