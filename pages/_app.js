import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/manrope/600.css'
import '@fontsource/raleway/300.css'
import '@fontsource/raleway/700.css'
import '@fontsource/sora/400.css'
import '@fontsource/sora/700.css'
import theme from '/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
