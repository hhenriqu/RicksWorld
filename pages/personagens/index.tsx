import { Container, Main } from '../../components/sharedstyles'
import Navbar from '../../components/infra/header/navbar'
import Footer from '../../components/infra/footer'
import CardCharList from '../../components/personagens/cardCharList'

function Personagens() {
  return (
    <Container>
      <Navbar />
      <Main>
        <CardCharList />
      </Main>
      <Footer />
    </Container>
  )
}

export default Personagens
