/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens:{
        'xsm':'320px',
        'sm':'500px',
        'md':'700px',
        'lg':'960px',
        'xl':'1200px',
        'xxl':'1400px',
        'max-md': {'max': '767px'},
      },
      colors:{
        orange:'#ffa500',
      }
    },
  },
  plugins: [],
}