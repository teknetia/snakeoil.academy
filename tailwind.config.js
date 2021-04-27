module.exports = {
  // mode: 'jit',
  //darkMode: 'media', //For prod
  darkMode: 'class', //For testing, set <html class="dark">
  purge: {
    content: [
      '_site/**/*.html',
      '**/*.njk',
      '_includes/**/*.njk',
    ],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#8c89c0',
          DEFAULT: '#5b57a5',
          dark: '#3f3c73',
        },
        alt: {
          light: '#68c17c',
          DEFAULT: '#28a745',
          dark: '#1c7430',
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}