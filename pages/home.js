import Head from 'next/head'
import Image from 'next/image'

import { Hero, Navbar } from '../components'

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
          alt="We make - nós criamos"
        />
      </Hero>

      <main></main>

      <footer></footer>
    </>
  )
}
