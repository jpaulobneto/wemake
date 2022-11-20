import Head from 'next/head'
import Image from 'next/image'
import { Button } from '../components'
import { Link, Navbar } from '/components'

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

      <Navbar>
        <Link href="/">
          <Image
            src="/wemake-logo.svg"
            alt="Logo da We Make - Nós Criamos"
            width={131}
            height={37}
          />
        </Link>

        <ul className={Navbar.styles.menu}>
          <li>Quem Somos</li>
          <li>Filosofia Educacional</li>
          <li>Makerspace</li>
          <li>Nova Língua</li>
          <li>Soluções</li>
        </ul>

        <Link
          className={Button.styles.primary}
          href="https://api.whatsapp.com/send?phone=5583982301530&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+We+Make+-+N%C3%B3s+criamos%21"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale Conosco
        </Link>
      </Navbar>

      <main></main>

      <footer></footer>
    </>
  )
}
