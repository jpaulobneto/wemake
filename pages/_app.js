import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'
import * as gtag from '../lib/gtag'
import theme from '/theme'

import '@fontsource/manrope/600.css'
import '@fontsource/raleway/300.css'
import '@fontsource/raleway/700.css'
import '@fontsource/sora/400.css'
import '@fontsource/sora/700.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* RDStation */}
      <Script
        strategy="afterInteractive"
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/1b744bf1-f5b9-4eaa-98c7-f4a60224dd5e-loader.js"
      />
    </ChakraProvider>
  )
}

export default MyApp
