// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Clear Sans', 'sans-serif'],
      'sans-medium': ['Clear Sans Medium', 'sans-serif'],
      body: ['Univers', 'sans-serif'],
      'body-light': ['Univers47-CondensedLight', 'sans-serif'],
      'body-normal': ['Univers-CondensedBold', 'sans-serif']
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      red: '#EE2E24',
      transparent: 'transparent',
      gray: '#C1C1C1'
    },
    backgroundColor: {
      white: '#FFFFFF',
      black: '#000000',
      red: '#EE2E24',
      gray: '#C1C1C1',
      'light-gray': '#F2F2F2',
      'off-black': '#111111',
      'light-red': '#E7E4E4'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      height: {
        'block-height': '500px',
      },
      border: {
        'menu': '#f2f2f2',
        'red': '#EE2E24',
        'gray': '#C1C1C1',
        'light-gray': '#f2f2f2',
        'transparent': '#EE2E24'
      },
      fontSize: {
        'xxs': '0.8125rem'
      },
      borderColor: {
        'light-gray': '#f2f2f2',
        'menu-darker': '#E7E4E4',
        'transparent': 'transparent'
      }
    }
  },
  variants: {},
}
