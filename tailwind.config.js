/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
    },
    letterSpacing:{
      wid:'0.8rem',
      widest: '1.2rem'
    }
    },
  },
  plugins: [
    daisyui
  ],
}

