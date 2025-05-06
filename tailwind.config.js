/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",       // Tailwind buscará dentro de la carpeta src/app
    "./src/components/**/*.{js,ts,jsx,tsx}", // También buscará dentro de src/components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Aplica Poppins como fuente sans
        serif: ['Playfair Display', 'serif'], // Aplica Playfair Display como fuente serif
      },
    },
  },
  plugins: [],
};
