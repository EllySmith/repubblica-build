// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  // Tailwind will scan these files
  theme: {
    extend: {
      fontFamily: {
        'eugenio': ['Eugenio Sans Text', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
