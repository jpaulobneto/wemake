import { Flex } from '@chakra-ui/react'

function Hero({ children }) {
  return (
    <Flex
      width="100%"
      height={['245px', '445px', '845px']}
      padding={8}
      bg="url(/hero-bg.jpg) center center no-repeat"
      bgSize="cover"
      align="center"
      justify="center"
    >
      {children}
    </Flex>
  )
}

export default Hero
