import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { Footer, Hero, Navbar } from '../components'
import {
  AboutMe,
  Makerspace,
  NewLanguage,
  OurSolutions,
  Philosophy,
} from '../slices'

export default function Home() {
  return (
    <>
      <Head>
        <title>We Make - Educação Tecnológica</title>
        <meta
          name="description"
          content="We Make - nós fazemos - é uma empresa criada com o objetivo de pensar, estudar, produzir e ensinar tecnologia a partir da Cosmovisão Cristã. Nos diferenciamos pelo compromisso com uma educação escolar distintamente cristã, que prima pela Verdade, Beleza e Bondade reveladas através da Bíblia e da criação."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Navbar />

      <Hero>
        <Image
          src={'/hero-logo.svg'}
          width={896}
          height={231}
          alt="We Make - nós criamos"
        />
      </Hero>

      {/* <main> */}
      {/*   <Box as="section" bg="brand.500" color="white"> */}
      {/*     <Container maxW="container.xl" py={40}> */}
      {/*       <HStack mb={100} justify="space-between" align="stretch"> */}
      {/*         <VStack w="full" align="flex-start"> */}
      {/*           <Heading as="h1" variant="h1Light" mb="5"> */}
      {/*             Quem Somos */}
      {/*           </Heading> */}
      {/*           <Heading as="h2" variant="h2Light"> */}
      {/*             Enquanto Empresa */}
      {/*           </Heading> */}
      {/*         </VStack> */}

      {/*         <VStack w="full" align="flex-start"> */}
      {/*           <Text mb={10}> */}
      {/*             <Text as="strong" color="brand.100"> */}
      {/*               We Make */}
      {/*             </Text>{' '} */}
      {/*             - nós fazemos - é uma empresa criada com o objetivo de{' '} */}
      {/*             <Text as="strong"> */}
      {/*               pensar, estudar, produzir e ensinar tecnologia */}
      {/*             </Text>{' '} */}
      {/*             a partir da{' '} */}
      {/*             <Text as="strong" color="brand.100"> */}
      {/*               Cosmovisão Cristã */}
      {/*             </Text> */}
      {/*             . */}
      {/*           </Text> */}

      {/*           <Text> */}
      {/*             Nos diferenciamos pelo compromisso com uma{' '} */}
      {/*             <Text as="strong" color="brand.100"> */}
      {/*               educação escolar distintamente cristã */}
      {/*             </Text> */}
      {/*             , que prima pela Verdade, Beleza e Bondade reveladas através */}
      {/*             da Bíblia e da criação. */}
      {/*           </Text> */}
      {/*         </VStack> */}
      {/*       </HStack> */}

      {/*       <Text mb={10}> */}
      {/*         Assim, nós entendemos a{' '} */}
      {/*         <Text as="strong" color="brand.100"> */}
      {/*           tecnologia */}
      {/*         </Text>{' '} */}
      {/*         não como um fim em si mesma, mas como parte do Mandato Cultural, */}
      {/*         cujo objetivo é{' '} */}
      {/*         <Text as="strong"> */}
      {/*           desenvolver os potenciais da criação e aliviar os efeitos da */}
      {/*           Queda */}
      {/*         </Text> */}
      {/*         . */}
      {/*       </Text> */}

      {/*       <Text mb={10}> */}
      {/*         E visualizamos a <Text as="strong">natureza do aluno</Text> e o */}
      {/*         seu <Text as="strong">potencial</Text>, a{' '} */}
      {/*         <Text as="strong">função do professor</Text>, a{' '} */}
      {/*         <Text as="strong">metodologia empregada</Text> e a{' '} */}
      {/*         <Text as="strong">construção do currículo</Text> à luz da{' '} */}
      {/*         <Text as="strong" color="brand.100"> */}
      {/*           metanarrativa Bíblica */}
      {/*         </Text> */}
      {/*         : */}
      {/*       </Text> */}

      {/*       <Text mb={20}> */}
      {/*         <Text as="strong">(1)</Text> Deus (em Cristo e pelo Espírito) cria */}
      {/*         o mundo; <Text as="strong">(2)</Text> o pecado debilita, deturpa e */}
      {/*         arruína a criação; <Text as="strong">(3)</Text> Deus age para */}
      {/*         curar, endireitar e restaurar; <Text as="strong">(4)</Text> Deus */}
      {/*         finalmente reconcilia todo o cosmo consigo mesmo. */}
      {/*       </Text> */}

      {/*       <Grid templateColumns="repeat(3, 1fr)" gap={10}> */}
      {/*         <GridItem bg="white" rounded="xl" color="black" py={10} px={7}> */}
      {/*           <Text */}
      {/*             as="h3" */}
      {/*             fontSize="32px" */}
      {/*             fontWeight="bold" */}
      {/*             mb={8} */}
      {/*             lineHeight="160%" */}
      {/*           > */}
      {/*             Visão */}
      {/*           </Text> */}
      {/*           <Text */}
      {/*             mb={10} */}
      {/*             fontSize="18px" */}
      {/*             lineHeight="160%" */}
      {/*             color="gray.700" */}
      {/*           > */}
      {/*             Nossa visão é ser uma empresa de referência em Educação */}
      {/*             Tecnológica fundamentada na Cosmovisão Cristã. */}
      {/*           </Text> */}
      {/*         </GridItem> */}

      {/*         <GridItem bg="white" rounded="xl" color="black" py={10} px={7}> */}
      {/*           <Text */}
      {/*             as="h3" */}
      {/*             fontSize="32px" */}
      {/*             fontWeight="bold" */}
      {/*             mb={8} */}
      {/*             lineHeight="160%" */}
      {/*           > */}
      {/*             Missão */}
      {/*           </Text> */}
      {/*           <Text */}
      {/*             mb={10} */}
      {/*             fontSize="18px" */}
      {/*             lineHeight="160%" */}
      {/*             color="gray.700" */}
      {/*           > */}
      {/*             Nossa missão é promover uma Educação Tecnológica de */}
      {/*             excelência, pensando, estudando, produzindo e ensinando */}
      {/*             tecnologia com liberdade e responsabilidade em resposta a */}
      {/*             Deus. */}
      {/*           </Text> */}
      {/*         </GridItem> */}

      {/*         <GridItem bg="white" rounded="xl" color="black" py={10} px={7}> */}
      {/*           <Text */}
      {/*             as="h3" */}
      {/*             fontSize="32px" */}
      {/*             fontWeight="bold" */}
      {/*             mb={8} */}
      {/*             lineHeight="160%" */}
      {/*           > */}
      {/*             Valores */}
      {/*           </Text> */}
      {/*           <Text */}
      {/*             mb={10} */}
      {/*             fontSize="18px" */}
      {/*             lineHeight="160%" */}
      {/*             color="gray.700" */}
      {/*           > */}
      {/*             - Cosmovisão Cristã; */}
      {/*             <br /> */}
      {/*             - Mordomia; */}
      {/*             <br /> */}
      {/*             - Inovação criacional; */}
      {/*             <br />- Transformação integral. */}
      {/*           </Text> */}
      {/*         </GridItem> */}
      {/*       </Grid> */}
      {/*     </Container> */}
      {/*   </Box> */}

      {/*   <AboutMe /> */}

      {/*   <Philosophy /> */}

      {/*   <Makerspace /> */}

      {/*   <NewLanguage /> */}

      {/*   <OurSolutions /> */}
      {/* </main> */}

      {/* <Footer /> */}
    </>
  )
}
