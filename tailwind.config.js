/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0b1220',
          secondary: '#0f1629',
          elevated: '#1a1f35',
        },
        brand: {
          primary: '#6366f1',
          'primary-hover': '#4f46e5',
          'primary-light': '#818cf8',
          secondary: '#d4af37',
          'secondary-hover': '#c19b2e',
        },
        text: {
          primary: '#e5e7eb',
          secondary: '#9ca3af',
          muted: '#6b7280',
        },
        border: {
          DEFAULT: '#1f2937',
          light: '#374151',
          accent: '#6366f1',
        }
      },
      fontFamily: {
        heading: ['Inter Tight', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        prose: '75ch',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [],
}