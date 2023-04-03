import Head from 'next/head'
import {
  Container,
  Main
} from '../components/sharedstyles'
import Navbar from '../components/infra/header/navbar'
import WpSlider from '../components/wpslider'
import Footer from '../components/infra/footer'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Rick's World</title>
        <meta name="description" content="A Rick & Morty Fan Site" />
        <link rel="icon" href="/favicon_rick.png" />
      </Head>
      <Navbar />
      <Main>
        <WpSlider />
        <div>
          <p>Este site foi desenvolvido como um teste para avaliação de alguns conhecimentos relacionados a vaga de desenvolvedor Front-End na empresa Green House <br/>
          Sinta-se a vontade para acessar o menu e testar todas as funcionalidades disponíveis.</p>
        </div>
      </Main>
      <Footer />
    </Container>
  )
}
