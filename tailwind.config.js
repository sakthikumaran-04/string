/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "body":["poppins", "sans-serif"],
      "logo":["Mochiy Pop One", "sans-serif"]
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://i.scdn.co/image/ab67616d0000b273e452a6e11147f3e56aee6f5b')"
      },
      colors: {
        'footer': '#111111',
      },
      gridTemplateColumns: {
        // Simple 16 row grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '1fr 2fr',
      }
    },
  },
  plugins: [],
}

