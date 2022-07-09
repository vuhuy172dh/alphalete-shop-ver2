module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', //notice: not space after trailing comma like: {js, ts, jsx}
    './components/**/*.{js, ts, jsx, tsx}'
  ],
  darkMode: 'class',
  theme: {
    letterSpacing: {
      tight: '-.015em'
    },
    extend: {
      height: {
        'half-screen': '50vh'
      }
    }
  },
  plugins: []
};
