import { extendTheme, theme } from '@chakra-ui/react'

export default extendTheme({
  colors: {
    gray: {
      700: '#585C7B',
    },
    brand: {
      100: '#73FBD3',
      500: '#498FE7',
    },
    gradient: {
      darkBlue: '#5c7aff',
      lightBlue: '#44e5e7',
    },
  },
  components: {
    Heading: {
      baseStyle: {
        textTransform: 'uppercase',
      },
      variants: {
        h1Light: {
          color: 'white',
          fontSize: '7xl',
          letterSpacing: '0.225em',
        },
        h2Light: {
          color: 'white',
          fontWeight: 'light',
          fontSize: '4xl',
          letterSpacing: '0.1em',
        },
      },
    },
    Text: {
      baseStyle: {
        lineHeight: '34px',
        fontSize: 'xl',
      },
    },
  },
  fonts: {
    body: `Sora, ${theme.fonts.body}`,
    heading: `Raleway, ${theme.fonts.heading}`,
  },
})
