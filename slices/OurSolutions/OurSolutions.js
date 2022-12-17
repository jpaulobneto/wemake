import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'

export default function OurSolutions() {
  return (
    <Box as="section">
      <Box bg="brand.500">
        <Container maxW="container.xl" py={28}>
          <VStack align="stretch" spacing={16}>
            <Heading as="h1" variant="h1Light" width="50%" mb={6}>
              Nossas Soluções
            </Heading>
            <Box
              rounded="3xl"
              bg="url(/our-solutions-bg.jpg) center center no-repeat"
              bgSize="110%"
              px={16}
              py={16}
              align="center"
              color="white"
            >
              <Grid templateColumns="1fr 1fr" gap={10}>
                <GridItem colSpan={2}>
                  <Heading as="h2" variant="h1Highlighted">
                    <Highlight
                      query="consultoria"
                      styles={{ fontWeight: 'bold', color: 'inherit' }}
                    >
                      Consultoria
                    </Highlight>
                  </Heading>
                </GridItem>
                <GridItem colSpan={2}>
                  <Text>
                    Entender o contexto educacional, identificar a problemática
                    de forma imparcial (olhar externo) e profissional, pensar em
                    uma solução mais adequada para propor, acompanhar a
                    aplicação e verificar os resultados.
                  </Text>
                </GridItem>
                <GridItem>
                  <Box
                    rounded="lg"
                    bgGradient="linear(to-r, gradient.lightGreen, gradient.darkGreen)"
                    px="16"
                    py="12"
                    color="black"
                    height="100%"
                  >
                    <Text
                      as="h3"
                      fontSize="32px"
                      fontWeight="bold"
                      mb={8}
                      lineHeight="160%"
                    >
                      Ecologia formativa
                    </Text>

                    <Text>
                      Estruturar o ambiente formativo - makerspace - levando em
                      consideração os espaços, rotinas, tempos, cultura
                      institucional e os objetivos almejados.
                    </Text>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box
                    rounded="lg"
                    bgGradient="linear(to-r, gradient.lightGreen, gradient.darkGreen)"
                    px="16"
                    py="12"
                    color="black"
                    height="100%"
                  >
                    <Text
                      as="h3"
                      fontSize="32px"
                      fontWeight="bold"
                      mb={8}
                      lineHeight="160%"
                    >
                      Capacitação
                    </Text>

                    <Text>
                      Fornecer treinamento pedagógico, tecnológico e teológico
                      para os professores dedicados.
                    </Text>
                  </Box>
                </GridItem>
              </Grid>
            </Box>

            <Box
              rounded="3xl"
              bg="url(/our-solutions-bg-2.jpg) center center no-repeat"
              bgSize="110%"
              px={28}
              py={16}
              align="center"
              color="white"
            >
              <Grid templateColumns="1fr" gap={10}>
                <GridItem>
                  <Heading as="h2" variant="h1Highlighted">
                    <Highlight
                      query="currículo"
                      styles={{ fontWeight: 'bold', color: 'inherit' }}
                    >
                      Currículo
                    </Highlight>
                  </Heading>
                </GridItem>
                <GridItem>
                  <Text>
                    As nossas aulas compreendem as áreas de{' '}
                    <Text as="strong" color="brand.100">
                      educação tecnológica, robótica educacional, eletrônica,
                      cidadania digital, programação e codificação e engenharia
                    </Text>
                    , likando-as às demais ciências liberais, da natureza e
                    sociais - <Text as="strong">interdisciplinaridade</Text>.
                  </Text>
                </GridItem>
                <GridItem>
                  <Text>
                    Teoria e Prática não se separam em nossas aulas. Nas
                    Escrituras, sabedoria é o termo bíblico que une{' '}
                    <Text as="strong" color="brand.100">
                      razão (teoria)
                    </Text>
                    ,{' '}
                    <Text as="strong" color="brand.100">
                      afeto (motivação)
                    </Text>{' '}
                    e{' '}
                    <Text as="strong" color="brand.100">
                      ação (prática)
                    </Text>
                    . Pensando nisto, as aulas são pensadas e construídas de
                    forma que promovam o{' '}
                    <Text as="strong">deslumbramento/maravilhamento</Text> dos
                    alunos e o engajamento, atingindo a mente, o coração e as
                    mãos.
                  </Text>
                </GridItem>

                <GridItem mt="6">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send?phone=5583982301530&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+We+Make+-+N%C3%B3s+criamos%21"
                  >
                    <Button
                      color="white"
                      rounded="full"
                      px={14}
                      py={8}
                      bgGradient="linear(to-r, gradient.darkPurple, gradient.lightPurple)"
                      fontWeight="bold"
                      fontFamily="Sora"
                      fontSize="2xl"
                      _hover={{
                        bgGradient:
                          'linear(to-l, gradient.darkPurple, gradient.lightPurple)',
                      }}
                    >
                      Saiba mais
                    </Button>
                  </Link>
                </GridItem>
              </Grid>
            </Box>
          </VStack>
        </Container>
      </Box>

      <Box bg="black" color="white">
        <Container maxW="container.xl" px={20} py={28} align="center">
          <Heading as="h2" variant="h1Highlighted" mb="32">
            <Highlight
              query="nossas soluções"
              styles={{ fontWeight: 'bold', color: 'inherit' }}
            >
              Deseja as nossas soluções para a sua Escola?
            </Highlight>
          </Heading>

          <Link
            display="block"
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=5583982301530&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+We+Make+-+N%C3%B3s+criamos%21"
            mb="40"
          >
            <Button
              color="white"
              rounded="full"
              px={14}
              py={8}
              bgGradient="linear(to-r, gradient.darkBlue, gradient.lightBlue)"
              fontWeight="bold"
              fontFamily="Sora"
              fontSize="2xl"
              _hover={{
                bgGradient:
                  'linear(to-l, gradient.darkBlue, gradient.lightBlue)',
              }}
            >
              Fale conosco
            </Button>
          </Link>
        </Container>
      </Box>
    </Box>
  )
}
