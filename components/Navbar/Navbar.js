import {
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
} from '@chakra-ui/react'
import { Link } from '../Link'

export default function Navbar() {
  return (
    <Flex
      bg="white"
      width="100%"
      position={{ base: 'inherit', md: 'fixed' }}
      zIndex="sticky"
    >
      <Container maxWidth="container.xl">
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
              href="https://wa.me/5583982301530?text=Ol%C3%A1!%20Eu%20gostaria%20de%20saber%20mais%20sobre%20a%20editora%20crist%C3%A3%20de%20educa%C3%A7%C3%A3o%20tecnol%C3%B3gica."
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
    </Flex>
  )
}
