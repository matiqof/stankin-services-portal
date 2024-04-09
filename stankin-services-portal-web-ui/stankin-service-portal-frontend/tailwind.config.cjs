/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'stankin-red': '#9C0C0C',
      'stankin-gray': '#797979',
      'stankin-white': '#ffffff',
      'stankin-black': '#000000',
      'stankin-blue': '#101075',
    },
  },
  plugins: [require("preline/plugin"), require("@tailwindcss/forms")],
};
