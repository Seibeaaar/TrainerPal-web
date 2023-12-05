/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#FFF',
        anti: '#1D1617',
        grayPrimary: '#7B6F72',
        graySecondary: '#ADA4A5',
        grayeTertiary: '#DDDADA',
        border: '#F7F8F8',
        primaryFrom: '#92A3FD',
        primaryTo: '#9DCEFF',
        secondaryFrom: '#C58BF2',
        secondaryTo: '#EEA4CE'
      }
    },
  },
  plugins: [],
}

