module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '481px',
      md: '737px',
      lg: '981px',
      xl: '1281px'
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16'
    }
  },
  corePlugins: {},
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
    //   require('@tailwindcss/aspect-ratio'),
  ]
}
