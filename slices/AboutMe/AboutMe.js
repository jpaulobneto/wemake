import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Highlight,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import Image from 'next/image'
import { Link } from '/components'

export default function AboutMe() {
  return (
    <Box as="section">
      <Container maxW="container.xl" py={{ base: 10, md: 20, lg: 40 }}>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          alignItems="center"
          gap={10}
        >
          <GridItem>
            <Heading
              as="h1"
              variant={{ base: 'h1Base', md: 'h1Md' }}
              mb={{ base: 1, md: 5 }}
            >
              Quem sou
            </Heading>
            <Heading
              as="h2"
              variant={{ base: 'h2Base', md: 'h2Md' }}
              mb={{ base: 10, md: 20, lg: 100 }}
            >
              Enquanto vocação
            </Heading>

            <UnorderedList>
              <ListItem>
                <Text lineHeight={9} fontSize={{ base: 'lg', lg: 'xl' }}>
                  <Highlight
                    query="Bacharel em Teologia"
                    styles={{
                      bg: 'brand.100',
                      fontWeight: 'bold',
                      p: 1,
                    }}
                  >
                    Bacharel em Teologia - Faculdade Internacional Cidade Viva;
                  </Highlight>
                </Text>
              </ListItem>
              <ListItem>
                <Text lineHeight={9} fontSize={{ base: 'lg', lg: 'xl' }}>
                  <Highlight
                    query="Educação Clássica Cristã"
                    styles={{
                      bg: 'brand.100',
                      fontWeight: 'bold',
                      p: 1,
                    }}
                  >
                    Pós-graduação em Educação Clássica Cristã - Faculdade
                    Internacional Cidade Viva;
                  </Highlight>
                </Text>
              </ListItem>
              <ListItem>
                <Text lineHeight={9} fontSize={{ base: 'lg', lg: 'xl' }}>
                  <Highlight
                    query="Engenharia Mecânica"
                    styles={{
                      bg: 'brand.100',
                      fontWeight: 'bold',
                      p: 1,
                    }}
                  >
                    Engenharia Mecânica - UFCG;
                  </Highlight>
                </Text>
              </ListItem>
              <ListItem>
                <Text lineHeight={9} fontSize={{ base: 'lg', lg: 'xl' }}>
                  <Highlight
                    query="Laboratório de Fabricação Digital"
                    styles={{
                      bg: 'brand.100',
                      fontWeight: 'bold',
                      p: 1,
                    }}
                  >
                    Coordenador do Laboratório de Fabricação Digital FABLAB JPA;
                  </Highlight>
                </Text>
              </ListItem>
              <ListItem>
                <Text lineHeight={9} fontSize={{ base: 'lg', lg: 'xl' }}>
                  <Highlight
                    query="Robótica e Educação Tecnológica"
                    styles={{
                      bg: 'brand.100',
                      fontWeight: 'bold',
                      p: 1,
                    }}
                  >
                    Professor de Robótica e Educação Tecnológica - Escola
                    Internacional Cidade Viva;
                  </Highlight>
                </Text>
              </ListItem>
              <ListItem>
                <Text lineHeight={9} fontSize={{ base: 'lg', lg: 'xl' }}>
                  <Highlight
                    query="Cosmovisão Cristã"
                    styles={{
                      bg: 'brand.100',
                      fontWeight: 'bold',
                      p: 1,
                    }}
                  >
                    Autor de material didático para sistema de ensino
                    interdisciplinar de tecnologia e metodologia baseada em
                    makerspace, fundamentado na Cosmovisão Cristã;
                  </Highlight>
                </Text>
              </ListItem>
              <ListItem>
                <Text lineHeight={9} fontSize={{ base: 'lg', lg: 'xl' }}>
                  <Highlight
                    query="Coordenador de ensino bíblico"
                    styles={{
                      bg: 'brand.100',
                      fontWeight: 'bold',
                      p: 1,
                    }}
                  >
                    Coordenador de ensino bíblico da Escola Bíblica Cidade Viva;
                  </Highlight>
                </Text>
              </ListItem>
              <ListItem>
                <Text lineHeight={9} fontSize={{ base: 'lg', lg: 'xl' }}>
                  <Highlight
                    query="Editor de material"
                    styles={{
                      bg: 'brand.100',
                      fontWeight: 'bold',
                      p: 1,
                    }}
                  >
                    Editor de material de Ensino Bíblico e Cristão.
                  </Highlight>
                </Text>
              </ListItem>
            </UnorderedList>
          </GridItem>

          <GridItem>
            <Box mb={7}>
              <Image
                src={'/denis.jpg'}
                width={510}
                height={569}
                alt="Dênis Júlio - CEO e fundador da We Make"
              />
            </Box>

            <Text fontWeight="bold" fontSize="medium">
              Quer conversar comigo?
            </Text>

            <Text fontSize="medium" mb={10}>
              Estou no{' '}
              <Text as="strong" fontSize="medium">
                Instagram
              </Text>{' '}
              <Link
                href="https://www.instagram.com/denisjulio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @denisjulio
              </Link>
              . Você também pode mandar um{' '}
              <Text as="strong" fontSize="medium">
                e-mail
              </Text>{' '}
              para{' '}
              <Link href="mailto:contato@wemake.tec.br">
                contato@wemake.tec.br
              </Link>
              .
            </Text>

            <Text fontWeight="bold" fontSize="medium">
              Minhas publicações
            </Text>

            <Text fontSize="medium">
              Eu tenho estudado sobre tecnologia, educação, filosofia e
              teologia.{' '}
              <Link
                href="https://www.canva.com/design/DAFRR4rab0o/2J55XGWIGVueoTj8Tq1lig/view?website#2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Veja meus artigos publicados
              </Link>
              .
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}
