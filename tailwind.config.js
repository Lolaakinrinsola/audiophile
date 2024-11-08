/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#d87d4a',
        dark: '#101010',
        grey: '#f1f1f1',
        lightGrey: '#fafafa',   
        lightPrimary: '#fbaf85', 
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'], // Add your custom font here
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

