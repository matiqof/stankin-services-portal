/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {}
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'stankin-red': '#9C0C0C',
      'stankin-gray': '#797979',
      'stankin-overlay': 'rgba(121,121,121,0.5)',
      'stankin-white': '#ffffff',
      'stankin-black': '#000000',
      'stankin-blue': '#101075',
      'stankin-bg-main': '#F5F5F5',
      'alert-bg-yellow': '#ffaa4b',
      'alert-border-yellow': '#fefcaa',
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    }
  },
  plugins: [require("preline/plugin"), require("@tailwindcss/forms")],
};
