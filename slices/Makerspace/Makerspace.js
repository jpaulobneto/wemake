import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'

const MAKERSPACE_BG_HEIGHT = 873

export default function Makerspace() {
  return (
    <Box as="section">
      <Flex
        bg={'url(/makerspace-bg.jpg) center center no-repeat'}
        bgSize="cover"
        mb="-1%"
        height={{
          base: `${MAKERSPACE_BG_HEIGHT * 0.45}px`,
          lg: `${MAKERSPACE_BG_HEIGHT * 0.6}px`,
          xl: `${MAKERSPACE_BG_HEIGHT}px`,
        }}
        justify="center"
        align={'center'}
      >
        <Box
          bgGradient="linear(to-r, gradient.darkBlue, gradient.lightBlue)"
          width="100%"
          marginLeft={{ base: 0, md: '30%' }}
          px={{ base: 4, md: 16 }}
          py={{ base: 4, md: 8 }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Heading as="h1" variant={{ base: 'h1LightBase', lg: 'h1LightMd' }}>
            Makerspace
          </Heading>
          <Heading
            as="h2"
            variant={{ base: 'h2LightBase', lg: 'h2LightMd' }}
            mt={8}
          >
            Laboratório
            <br /> de Fabricação
          </Heading>
        </Box>
      </Flex>

      <Box bg="brand.500" textAlign={'center'}>
        <Container maxW={'container.xl'} py={{ base: 10, md: 20, lg: 40 }}>
          <Heading
            as="h3"
            variant={{
              base: 'h1HighlightedLightBase',
              md: 'h1HighlightedLightMd',
            }}
            mb={4}
          >
            <Highlight
              query={'makerspace'}
              styles={{ fontWeight: 'bold', color: 'inherit' }}
            >
              O que é makerspace?
            </Highlight>
          </Heading>
          <Text color={'white'} mb={{ base: 16, lg: 24 }}>
            O <Text as="strong">makerspace</Text> um espaço de criatividade,
            aprendizado e inovação, criado com o objetivo de inspirar e
            viabilizar ideias para serem transformadas em objetos reais, por
            meio de processos colaborativos de criação e compartilhamento de
            conhecimento. Este é o background ideal no caminho do{' '}
            <Text as="strong" color="brand.100">
              aprender a aprender
            </Text>
            .
          </Text>
          <Heading
            as="h3"
            variant={{
              base: 'h1HighlightedLightBase',
              md: 'h1HighlightedLightMd',
            }}
            mb={4}
          >
            <Highlight
              query={'como'}
              styles={{ fontWeight: 'bold', color: 'inherit' }}
            >
              Como?
            </Highlight>
          </Heading>
          <Text color={'white'} mb={4}>
            Permitindo o{' '}
            <Text as="strong">
              compartilhamento de ideias, o acesso a novos conhecimentos, e a
              uma variedade de tecnologias de fabricação digital e materiais
            </Text>
            , que se conectam aos interesses dos alunos dentro e fora da escola,
            fomentando, em cada aluno, a capacidade, criatividade e confiança
            para se{' '}
            <Text as="strong" color="brand.100">
              tornarem agentes de mudança em suas vidas pessoais e na
              comunidade.
            </Text>
          </Text>
          <Text color="white">
            Isto é, unindo estes três elementos: propósito - pessoas -
            ferramentas
          </Text>{' '}
        </Container>
      </Box>

      <Box
        bg={'url(/makerspace-bg-2.jpg) center center no-repeat'}
        bgSize="cover"
      >
        <Container maxW={'container.xl'} py={{ base: 10, md: 20, lg: 40 }}>
          <Grid
            templateColumns={{ base: '1fr', md: '25% 1fr' }}
            columnGap={10}
            rowGap={{ base: 8, md: 28 }}
            color="white"
          >
            <GridItem>
              <Image
                src={'/makerspace-proposito.png'}
                width={546}
                height={604}
                alt="A palavra propósito seguida de uma imagem de uma prótese de mão humana"
              />
            </GridItem>
            <GridItem>
              <VStack spacing={6}>
                <Text>
                  O sucesso da experiência de aprendizagem em um{' '}
                  <Text as="strong">makerspace</Text> inicia-se ao entender o
                  seu propósito, no que diz respeito aos seus objetivos, missão
                  e valores.
                </Text>

                <Text as="strong" color="brand.100">
                  Qual é o propósito de um espaço como este em um ambiente
                  escolar?
                </Text>

                <Text>
                  Fornecer o background ideal para que os alunos desenvolvam os
                  potenciais da criação, cumpram o mandato cultural através do
                  estudo e desenvolvimento da tecnologia de forma doxológica; e
                  ampliar os horizontes quanto à descoberta de suas vocações.
                </Text>

                <Text>
                  O makerspace se apresenta como um verdadeiro microcosmo da
                  criação e para a criatividade, atendendo, inicialmente, ao
                  currículo e as aulas programadas pela{' '}
                  <Text as="strong">We Make</Text>, mas, posteriormente,
                  rompe-se os limites escolares, alcançando a comunidade.
                </Text>
              </VStack>
            </GridItem>

            <GridItem>
              <Image
                src={'/makerspace-pessoas.png'}
                width={546}
                height={604}
                alt="A palavra pessoas seguida de uma imagem de um professor apontando para um computador rodeado de 4 crianças olhando para sua tela"
              />
            </GridItem>
            <GridItem>
              <VStack spacing={6}>
                <Text>
                  A cooperação, o trabalho em equipe, o ser comunidade é
                  elemento fundamental para o pleno funcionamento do{' '}
                  <Text as="strong">makerspace</Text>.
                </Text>

                <Text>
                  Toda tecnologia estudada ou produzida não diz respeito a um,
                  mas a dois, três e mais. Não apenas no processo de projeto e
                  fabricação, mas também referindo-se àqueles que serão
                  beneficiados por esta tecnologia -{' '}
                  <Text as="strong" color="brand.100">
                    serviço ao próximo.
                  </Text>
                </Text>

                <Text>
                  O ensino não é centrado no aluno. Todo o corpo envolvido será
                  impactado pelo ambiente criativo: Escola, professores,
                  colaboradores, alunos, famílias, comunidade. A figura do{' '}
                  <Text as="strong">professor</Text>, como transmissor do
                  conhecimento e referencial axiológico, se faz necessária e
                  importante. A{' '}
                  <Text as="strong">Escola e os colaboradores</Text> como
                  aqueles que hospedam e fornecem os meios para o cumprimento do
                  propósito. O <Text as="strong">aluno</Text> é maravilhado,
                  recebe, desenvolve e compartilha o conhecimento. A{' '}
                  <Text as="strong">família e a comunidade</Text> - conjunto de
                  famílias - sendo impactadas.
                </Text>
              </VStack>
            </GridItem>

            <GridItem>
              <Image
                src={'/makerspace-ferramentas.png'}
                width={546}
                height={604}
                alt="A palavra ferramentas seguida de uma imagem de uma prateleira com várias ferramentas diferentes"
              />
            </GridItem>
            <GridItem>
              <VStack spacing={6}>
                <Text>
                  Quando alinhadas claramente ao propósito e às pessoas
                  envolvidas no <Text as="strong">makerspace</Text>, as
                  ferramentas, máquinas e insumos cumprem o seu papel
                  importante, porém servil. Toda tecnologia usada, estudada ou
                  produzida não é o fim em si mesma, porém, o meio pelo qual
                  cumpre-se o propósito e serve as pessoas.
                </Text>

                <Text>
                  Toda ferramenta usada faz parte do{' '}
                  <Text as="strong" color="brand.100">
                    Mandato Cultural
                  </Text>{' '}
                  - eco da ordenança de cultivar e guardar o jardim - promovendo
                  alívio aos efeitos da Queda na criação; facilidade no
                  desenvolvimento de tarefas; potencializando boas feituras -
                  redenção limitada.
                </Text>

                <Text>
                  Um makerspace pode ter uma variedade de ferramentas e
                  equipamentos, como computadores com software de desenho
                  digital CAD e plataforma de programação e codificação,
                  equipamentos de eletrônica e robótica, ferramentas de
                  marcenaria, mecânica, e materiais de papelaria. Todavia, o seu
                  diferencial está nas máquinas e equipamentos que são capazes
                  de{' '}
                  <Text as="strong" color="brand.100">
                    transformar bits e bytes e átomos
                  </Text>{' '}
                  - isto é, trazer para a realidade aquilo que é pensado e
                  projetado no ambiente digital:{' '}
                  <Text as="strong">
                    Impressora 3D, Máquina de corte a laser, Robótica e
                    Eletrônica Arduino.
                  </Text>
                </Text>
              </VStack>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Box bg="brand.500" align="center">
        <Container maxW="container.xl" py={36}>
          <VStack spacing={8}>
            <Heading
              as="h3"
              variant={{
                base: 'h1HighlightedLightBase',
                md: 'h1HighlightedLightMd',
              }}
              mb={5}
            >
              <Highlight
                query={'implantar'}
                styles={{ fontWeight: 'bold', color: 'inherit' }}
              >
                Você deseja implantar um makerspace em sua Escola?
              </Highlight>
            </Heading>

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
                Fale conosco
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
