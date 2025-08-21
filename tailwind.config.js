export default {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#263B50',
        cream: '#F3EDE0',
      },
      fontFamily: {
        display: ['Brittany','ui-sans-serif','system-ui','Segoe UI','Roboto','sans-serif'],
        body: ['ui-sans-serif','system-ui','Segoe UI','Roboto','sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
