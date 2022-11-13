import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>We Make - Educação Tecnológica</title>
        <meta
          name="description"
          content="We Make - nós fazemos - é uma empresa criada com o objetivo de pensar, estudar, produzir e ensinar tecnologia a partir da Cosmovisão Cristã. Nos diferenciamos pelo compromisso com uma educação escolar distintamente cristã, que prima pela Verdade, Beleza e Bondade reveladas através da Bíblia e da criação."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <a
          href="https://api.whatsapp.com/send?phone=5583996541530&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+We+Make+-+N%C3%B3s+criamos%21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.logoIcon}
            src="/wemake-logo-icon.svg"
            alt="Logomarca"
            width={124}
            height={74}
          />
          <Image
            className={styles.logoText}
            src="/wemake-logo-text.svg"
            alt="We Make - nós criamos"
            width={124}
            height={74}
          />
        </a>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
