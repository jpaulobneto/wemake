import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'

export default function Philosophy() {
  return (
    <Box as="section">
      <Flex
        bgGradient={'linear(to-r, gradient.darkBlue, gradient.lightBlue)'}
        align={'center'}
        justify={'center'}
        py={{ base: 80 / 4, md: 160 / 4 }}
        color={'white'}
        textAlign="center"
      >
        <Heading
          as="h1Base"
          fontSize={{ base: '3xl', md: '6xl' }}
          letterSpacing={'0.15em'}
          lineHeight={'tall'}
        >
          Filosofia Educacional
        </Heading>
      </Flex>

      <Container maxW={'container.xl'} py={{ base: 10, md: 20, lg: 40 }}>
        <Grid
          columnGap={10}
          rowGap={10}
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          /* templateRows={'repeat(9, auto-fit)'} */
        >
          <GridItem rowSpan={{ base: 0, md: 2, lg: 3 }}>
            <Image
              src={'/quem-queremos-educar.png'}
              width={539}
              height={682}
              alt="crianças em uma sala de aula levantando as mãos para interagir"
            />
          </GridItem>
          <GridItem>
            <Heading
              as={'h2'}
              variant={{ base: 'h1HighlightedBase', md: 'h1HighlightedMd' }}
            >
              Quem queremos{' '}
              <Highlight
                query="educar"
                styles={{
                  bg: 'brand.100',
                  fontWeight: 'bold',
                  p: 1,
                }}
              >
                educar?
              </Highlight>
            </Heading>
          </GridItem>
          <GridItem>
            <Text>
              &quot;Por trás de roda pedagogia, há uma antropologia
              filosófica&quot; (James K. Smith).
            </Text>
          </GridItem>
          <GridItem colSpan={{ base: 0, md: 2, lg: 1 }}>
            <Text>
              Os alunos não são um acidente cósmico ou evolução do macaco, mas
              foram intencionalmente criados à{' '}
              <Text as={'strong'}> imagem e semelhança de Deus</Text>, que é
              bom, pessoal e está presente, porém foram manchados pelo pecado.
              Enquanto seres humanos, não somos reduzidos à mente (homo
              sapiens), como sugere Descartes em sua máxima - &quot;penso, logo
              existo&quot; - assim como, não somos aquilo que fazemos (homo
              faber), como é sugerido pela educação maker moderna.
            </Text>
          </GridItem>
          <GridItem colSpan={{ base: 0, md: 2 }}>
            <Text>
              Por outro lado, a Bíblia aponta para o{' '}
              <Text as="strong" color="brand.500">
                coração
              </Text>{' '}
              como o centro da existência humana (homo liturgicus). Isto é,
              antes do aspecto racional e prático, as a nossa cosmovisão atua em
              nossos corações - somos aquilo que nós amamos.
            </Text>
          </GridItem>
          <GridItem colSpan={{ base: 0, md: 2 }}>
            <Text>
              Desta forma, a <Text as="strong">We make</Text> é comprometida com
              o{' '}
              <Text as="strong" color="brand.500">
                desenvolvimento integral
              </Text>{' '}
              de nossos alunos, valorizando-os enquanto pessoas criadas à imagem
              e semelhança de Deus, reconciliando-os com o Criador, com os
              semelhantes, consigo mesmo e com toda a criação.
            </Text>
          </GridItem>

          <GridItem mt={{ base: 0, md: 16 }}>
            <Heading
              as={'h2'}
              variant={{ base: 'h1HighlightedBase', md: 'h1HighlightedMd' }}
            >
              Para qual{' '}
              <Highlight
                query="realidade"
                styles={{
                  bg: 'brand.100',
                  fontWeight: 'bold',
                  p: 1,
                }}
              >
                realidade
              </Highlight>{' '}
              educar?
            </Heading>
          </GridItem>
          <GridItem
            rowSpan={{ base: 0, md: 2, lg: 3 }}
            mt={{ base: 0, md: 16 }}
          >
            <Image
              src={'/pra-qual-realidade.png'}
              width={539}
              height={682}
              alt="criança interagindo com um peça mecânica que sustenta um globo"
            />
          </GridItem>
          <GridItem>
            <Text>
              O mundo foi feito para a glória de Deus em Jesus Cristo, com o
              objetivo de criar o contexto onde o amor de Deus pudesse ser
              derramado e a sua glória desfrutada -
              <Text as="strong">&quot;Teatro da Glória de Deus&quot;</Text>{' '}
              (João Calvino).
            </Text>
          </GridItem>
          <GridItem colSpan={{ base: 0, md: 2, lg: 1 }}>
            <Text>
              Nós entendemos o mundo como inteligível e relacional, e devemos
              conhecê-lo pelo conhecimento de Deus, com sabedoria e
              responsabilidade, por meio de uma{' '}
              <Text as="strong" color="brand.500">
                aprendizagem doxológica
              </Text>{' '}
              (para a glória de Deus) e com{' '}
              <Text as="strong" color="brand.500">
                abordagem esperançosa/escatológica
              </Text>{' '}
              (educando para a eternidade).
            </Text>
          </GridItem>
          <GridItem colSpan={{ base: 0, md: 2 }}>
            <Text>
              Assim, a <Text as="strong">We make</Text> tem o compromisso de
              pensar, estudar, produzir e ensinar tecnologia com{' '}
              <Text as="strong" color="brand.500">
                liberdade e responsabilidade em resposta a Deus
              </Text>{' '}
              (Mandato Cultural), de forma que{' '}
              <Text as="strong">glorifique a Cristo</Text> e{' '}
              <Text as="strong">sirva ao próximo.</Text>
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}
