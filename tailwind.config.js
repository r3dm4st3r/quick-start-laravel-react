const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./index.html', './resources/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        head: ['"Montserrat"', 'sans-serif'],
        body: ['"Roboto Slab"', 'sans-serif']
      },
      colors: {
        danger: '#d72b01',
        success: '#06ad4a',
        theme: '#06ad4a',
        white: '#ffffff',
        dark: {
          50: '#0d0c0c',
          100: '#f55d12',
          200: '#181818',
          300: '#151414',
          400: '#181818'
        }
      },
      fontWeight: {
        normal: 400,
        semiBold: 600,
        bold: 700,
        extraBold: 800
      }
    },
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      xxs: '380px',
      xs: '480px',
      sm: '576px',
      md: '767px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px'
    }
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
    plugin(({ addBase, theme, addComponents }) => {
      addBase({
        body: {
          fontFamily: theme('fontFamily.sans'),
          fontWeight: theme('fontWeight.normal'),
          fontSize: theme('fontSize.base')
        },
        h1: {
          fontFamily: theme('fontFamily.head'),
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.3xl'),
          lineHeight: theme('leading.normal')
        },
        h2: {
          fontFamily: theme('fontFamily.head'),
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.2xl'),
          lineHeight: theme('leading.normal')
        },
        h3: {
          fontFamily: theme('fontFamily.head'),
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.xl'),
          lineHeight: theme('leading.normal')
        },
        h4: {
          fontFamily: theme('fontFamily.head'),
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.xl'),
          lineHeight: theme('leading.normal')
        },
        h5: {
          fontFamily: theme('fontFamily.head'),
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.lg'),
          lineHeight: theme('leading.normal')
        },
        h6: {
          fontFamily: theme('fontFamily.head'),
          fontWeight: theme('fontWeight.bold'),
          fontSize: theme('fontSize.md'),
          lineHeight: theme('leading.normal')
        },
        p: {
          fontFamily: theme('fontFamily.sans'),
          fontWeight: theme('fontWeight.normal'),
          fontSize: theme('fontSize.sm')
        }
      });
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xxs': {
            maxWidth: '95%'
          },
          '@screen xs': {
            maxWidth: '95%'
          },
          '@screen sm': {
            maxWidth: '95%'
          },
          '@screen md': {
            maxWidth: '95%'
          },
          '@screen lg': {
            maxWidth: '90%'
          },
          '@screen xl': {
            maxWidth: '90%'
          },
          '@screen xxl': {
            maxWidth: '95%'
          }
        }
      });
    })
  ]
};
