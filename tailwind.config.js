/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        app: '68.75rem',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
