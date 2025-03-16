
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0055FF',
          50: '#F0F5FF',
          100: '#E6EDFF',
          200: '#BFDBFF',
          300: '#99C4FF',
          400: '#4D94FF',
          500: '#0055FF',
          600: '#0044CC',
          700: '#003399',
          800: '#002266',
          900: '#001133',
        },
      },
    },
  },
  plugins: [],
}
