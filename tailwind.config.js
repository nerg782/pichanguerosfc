/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          /* Alineado al verde oscuro del escudo con fondo degradado */
          deep: '#0a1a14',
          canvas: '#0d2018',
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
        'hero-vignette':
          'radial-gradient(ellipse 75% 60% at 50% 45%, rgba(13, 32, 24, 0.5) 0%, transparent 65%)',
      },
    },
  },
  plugins: [],
}
