/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        fadeTop: {
          '0%': {transform: 'translateY(-200px)', opacity: 0},
          '100%': {transform: 'translate(0)', opacity: 1}
        },
        fadeBottom: {
          '0%': {transform: 'translateY(200px)', opacity: 0},
          '100%': {transform: 'translate(0)', opacity: 1}
        }
      },
      animation: {
        fadeTop: 'fadeTop 2s ease-in-out',
        fadeBottom: 'fadeBottom 2s ease-in-out'
      },
      colors: {
        background: '#FFF',
        anti: '#1D1617',
        grayPrimary: '#7B6F72',
        graySecondary: '#ADA4A5',
        grayeTertiary: '#DDDADA',
        border: '#F7F8F8',
        primary: '#92A3FD',
        primaryDark: '#727dba',
        secondaryFrom: '#C58BF2',
        secondaryTo: '#EEA4CE'
      },
    },
  },
  plugins: [],
}

