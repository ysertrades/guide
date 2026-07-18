/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: 'rgba(100,200,180,0.7)',
      },
      borderRadius: {
        card: '12px',
      },
    },
  },
  plugins: [],
}
