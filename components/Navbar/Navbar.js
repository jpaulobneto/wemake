import { Button, Container, Grid, GridItem, Image } from '@chakra-ui/react'
import { Link } from '../Link'

export default function Navbar() {
  return (
    <Container
      maxWidth="container.xl"
      bg="white"
      position={{ base: 'inherit', md: 'fixed' }}
      zIndex="sticky"
    >
      <Grid
        templateColumns={[
          'auto auto',
          'auto auto',
          'auto auto',
          'auto 1fr auto',
        ]}
        justifyContent="space-between"
        alignItems="center"
        gap={8}
        height={20}
      >
        <GridItem>
          <Link href="/">
            <Image
              src="/wemake-logo.png"
              alt="We Make - nós criamos"
              width={135}
              height={45}
              minW={135}
            />
          </Link>
        </GridItem>

        <GridItem display={['none', 'none', 'none', 'block']}>
          <Grid
            templateColumns="repeat(5, auto)"
            justifyContent="space-around"
            alignItems="center"
            gap={8}
          >
            <GridItem>
              <Link href="#quem-somos">Quem Somos</Link>
            </GridItem>
            <GridItem>
              <Link href="#filosofia-educacional">Filosofia Educacional</Link>
            </GridItem>
            <GridItem>
              <Link href="#makerspace">Makerspace</Link>
            </GridItem>
            <GridItem>
              <Link href="#nova-lingua">Nova Língua</Link>
            </GridItem>
            <GridItem>
              <Link href="#solucoes">Soluções</Link>
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https:api.whatsapp.com/send?phone=5583982301530&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+We+Make+-+N%C3%B3s+criamos%21"
          >
            <Button
              color="white"
              bgGradient="linear(to-r, gradient.darkBlue, gradient.lightBlue)"
              fontWeight="400"
              fontFamily="Manrope"
              transition="background-color 0.5s ease"
              _hover={{
                bgGradient:
                  'linear(to-l, gradient.darkBlue, gradient.lightBlue)',
              }}
            >
              Fale Conosco
            </Button>
          </Link>
        </GridItem>
      </Grid>
    </Container>
  )
}
