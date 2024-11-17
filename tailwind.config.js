module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',  // Add this to extend width values
      },
      fontFamily: {
        eugenio: ['"Eugenio Sans Text Web Med Regular"', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
