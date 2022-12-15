import { Flex, Heading } from '@chakra-ui/react'

export default function Philosophy() {
  return (
    <Flex bgGradient={'linear(to-r, gradient.darkBlue, gradient.lightBlue)'} align={'center'} justify={'center'} py={160 / 4} color={'white'}>
      <Heading as="h1" fontSize={'6xl'} letterSpacing={'0.15em'} lineHeight={'tall'}>Filosofia Educacional</Heading>
    </Flex>
  )
}
