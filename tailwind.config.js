/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#E3F2FD',
          DEFAULT: '#1C88E5',
          dark: '#0F5BB5',
        },
        accent: '#0F9ED5',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 25px 50px rgba(15, 91, 181, 0.08)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, rgba(15,91,181,0.95), rgba(10,138,197,0.9))',
      },
    },
  },
  plugins: [],
};

