/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        power: {
          darkGreen: '#113321', // Verde oscuro (POWER)
          lightGreen: '#8CC63F', // Verde lima (ANDINA)
          blue: '#1C4076', // Azul marino corporativo
          lightBlue: '#2082C6', // Azul claro/celeste
          yellow: '#FFD100', // Amarillo (Fantasia/Wind)
          background: '#F5F5F5', // Gris claro para fondo
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        accent: '#f59e0b',
        dark: '#0f172a',
        light: '#f8fafc',
      },
    },
  },
  plugins: [],
};
