import { Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'

function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <ChakraLink {...props}>{children}</ChakraLink>
    </NextLink>
  )
}

export default Link
