import { Box, Container, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import Image from 'next/image'

export default function Philosophy() {
  return (
    <Box as="section">
      <Flex bgGradient={'linear(to-r, gradient.darkBlue, gradient.lightBlue)'} align={'center'} justify={'center'} py={160 / 4} color={'white'}>
        <Heading as="h1" fontSize={'6xl'} letterSpacing={'0.15em'} lineHeight={'tall'}>Filosofia Educacional</Heading>
      </Flex>

      <Container maxW={'container.xl'} py={40}>
        <Grid columnGap={10} rowGap={10} templateColumns={'repeat(2, 1fr)'}>
          <GridItem>
            <Image
              src={'/quem-queremos-educar.png'}
              width={539}
              height={682}
              alt="crianças em uma sala de aula levantando as mãos para interagir"
            />
          </GridItem>
          <GridItem>Cell 2</GridItem>
          <GridItem colSpan={2}>Cell 3</GridItem>
          <GridItem colSpan={2}>Cell 4</GridItem>

          <GridItem>Cell 1</GridItem>
          <GridItem>
            <Image
              src={'/quem-queremos-educar.png'}
              width={539}
              height={682}
              alt="crianças em uma sala de aula levantando as mãos para interagir"
            />
          </GridItem>
          <GridItem colSpan={2}>Cell 3</GridItem>
        </Grid>
      </Container>
    </Box >
  )
}
