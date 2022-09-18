module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    screens: {
      mobile: '360px',
      tablet: '768px',
      desktop: '994px',
      wide: '1537px',
    },

    extend: {
      colors: {
        black: '#1b1a25',
      },
    },
  },
  plugins: [],
}
