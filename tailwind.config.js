module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '481px',
      md: '737px',
      lg: '981px',
      xl: '1281px'
    },
    // extend: {
    // HTML5up Theme Colors
    colors: {
      bg: '#1c1d26',
      'bg-transparent': 'rgba(23,24,32,0.95)',
      'fg-bold': '#ffffff',
      fg: 'rgba(255,255,255,0.75)',
      'fg-light': 'rgba(255,255,255,0.5)',
      'fg-lighter': 'rgba(255,255,255,0.15)',
      border: 'rgba(255,255,255,0.3)',
      'border-bg': 'rgba(255,255,255,0.075)',
      border2: 'rgba(255,255,255,0.5)',
      'border2-bg': 'rgba(255,255,255,0.25)',
      accent1: '#e44c65',
      accent2: '#272833',
      'accent2-transparent': 'rgba(39,40,51,0.965)',
      accent3: '#5480f1',
      accent4: '#39c088'
    },
    backgroundColor: {
      bg: '#1c1d26',
      'bg-transparent': 'rgba(23,24,32,0.95)',
      'border-bg': 'rgba(255,255,255,0.075)',
      'border2-bg': 'rgba(255,255,255,0.25)'
    },
    borderColor: {
      border: 'rgba(255,255,255,0.3)',
      border2: 'rgba(255,255,255,0.5)'
    },
    accentColor: {
      accent1: '#e44c65',
      accent2: '#272833',
      'accent2-transparent': 'rgba(39,40,51,0.965)',
      accent3: '#5480f1',
      accent4: '#39c088'
    },
    divideColor: ({ theme }) => ({
      ...theme('borderColor')
    }),
    textColor: {
      'fg-bold': '#ffffff',
      fg: 'rgba(255,255,255,0.75)',
      'fg-light': 'rgba(255,255,255,0.5)',
      'fg-lighter': 'rgba(255,255,255,0.15)'
    },
    // },
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
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
