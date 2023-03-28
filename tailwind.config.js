module.exports = {
  content: ['./src/**/*.{html,js}'],
  // class to enable the ise of darkmode
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        other: { min: '340px', max: '1200px' },
      },
    },
  },
  plugins: [],
};
