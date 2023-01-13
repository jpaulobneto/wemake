import {
  Box,
  Container,
  Flex,
  Heading,
  Highlight,
  Text,
  VStack,
} from '@chakra-ui/react'

export default function NewLanguage() {
  return (
    <Box as="section">
      <Flex
        bg={'url(/new-language-bg.jpg) center center no-repeat'}
        bgSize="cover"
        height={{ lg: '790px' }}
        justify="center"
        align={'center'}
      />

      <Container
        maxW={'container.xl'}
        py={{ base: 10, md: 20, lg: 40 }}
        align="center"
      >
        <Heading
          as="h1"
          variant={{ base: 'h1HighlightedBase', md: 'h1HighlightedMd' }}
          mb={{ base: 8, md: 14 }}
        >
          <Highlight
            query={'nova língua'}
            styles={{
              bg: 'brand.100',
              fontWeight: 'bold',
              p: 1,
            }}
          >
            Aprendendo uma nova língua
          </Highlight>
        </Heading>

        <VStack spacing={8}>
          <Text>
            Assim como o estudo das línguas originais é importante para o
            aprendizado de qualquer idioma, o estudo da{' '}
            <Text as="strong" color="brand.500">
              lógica de programação
            </Text>{' '}
            e{' '}
            <Text as="strong" color="brand.500">
              codificação
            </Text>{' '}
            fornece as bases e fundamentos para que qualquer linguagem de
            programação seja aprendida, rompendo as estruturas pragmatistas da
            modernidade.
          </Text>
          <Text>
            Dominar uma nova língua, ainda que digital, abrirá caminhos para o
            <Text as="strong">exercício da vocação com excelência</Text>,
            independentemente da área de atuação que os nossos alunos sigam.
            Para mais, <Text as="strong">outras habilidades importantes</Text>{' '}
            são desenvolvidas através das aulas de Programação e codificação:
            pensamento computacional, lógica, planejamento, depuração,
            organização, criatividade, etc.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
