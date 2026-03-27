/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          deep: '#0a1a14',
          DEFAULT: '#1b4332',
          accent: '#4da167',
        },
        pitch: {
          light: '#e0e0e0',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grass-stripes':
          'repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.12) 3px, rgba(0,0,0,0.12) 6px)',
      },
    },
  },
  plugins: [],
}
