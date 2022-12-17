import { Button, Container, Grid, GridItem, Image } from '@chakra-ui/react'
import { Link } from '../Link'

export default function Navbar() {
  return (
    <Container maxWidth="container.xl">
      <Grid
        templateColumns={{ lg: 'auto 1fr auto', base: 'auto auto' }}
        gap={8}
        height={20}
      >
        <GridItem width={40} alignSelf="center" justifySelf="start">
          <Link href="/">
            <Image
              src="/wemake-logo.png"
              alt="We Make - nós criamos"
              width={135}
              height={45}
            />
          </Link>
        </GridItem>
        <GridItem alignSelf="center" display={{ base: 'none', lg: 'grid' }}>
          <Grid templateColumns="repeat(5, auto)" gap={9}>
            <GridItem>
              <Link href="/home">Quem Somos</Link>
            </GridItem>
            <GridItem>
              <Link href="/home">Filosofia Educacional</Link>
            </GridItem>
            <GridItem>
              <Link href="/home">Makerspace</Link>
            </GridItem>
            <GridItem>
              <Link href="/home">Nova Língua</Link>
            </GridItem>
            <GridItem>
              <Link href="/home">Soluções</Link>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem
          width={40}
          alignSelf="center"
          justifySelf="center"
          align="right"
        >
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=5583982301530&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+We+Make+-+N%C3%B3s+criamos%21"
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
