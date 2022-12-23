import { Flex } from '@chakra-ui/react'

export default function Hero({ children }) {
  return (
    <Flex
      width="100%"
      height={['250px', '500px', '845px']}
      padding={8}
      bg="url(/hero-bg.jpg) center center no-repeat"
      bgSize="cover"
      justify="center"
    >
      {children}
    </Flex>
  )
}
