/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        calc: {
          bg: '#000000', // Linear style is often pitch black or very dark
          surface: '#0A0A0A',
          border: '#222222',
        }
      }
    },
  },
  plugins: [],
}
