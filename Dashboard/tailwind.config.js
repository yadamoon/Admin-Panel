/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
       colors: {
            'top-color': '#8e4d57',
            'heading': '#fcfbfc',
          }
     
    },
  },
  plugins: [],
};
