// @see: https://tailwindcss.com/docs/configuration/
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Single accent colour. teal-700: 5.5:1 contrast on white.
        accent: '#0f766e',
      },
    },
  },
  plugins: [],
};
