const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // 'media' or false or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'white',
      'dark-grey': '#222831',
      'light-grey': '#393E46',
      'teal-base': '#00ADB5',
      offwhite: '#EEEEEE',
      ...colors,
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};