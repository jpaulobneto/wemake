import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'

const colors = {
  brand: {
    500: '#498FE7',
  },
  gradient: {
    darkBlue: '#5c7aff',
    lightBlue: '#44e5e7',
  },
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
