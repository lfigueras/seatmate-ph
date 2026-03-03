module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#14B8A6',
          emerald: '#10B981',
          tealDark: '#0D9488',
          emeraldDark: '#059669'
        }
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(to right, #14B8A6, #10B981)',
        'gradient-main-hover': 'linear-gradient(to right, #0D9488, #059669)'
      }
    }
  },
  plugins: []
}
