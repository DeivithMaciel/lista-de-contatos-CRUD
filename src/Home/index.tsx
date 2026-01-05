import ContactCard from '../components/ContactCard'
import Header from '../components/Header/'

import { ContainerHome } from './styles'

const Home = () => {
  return (
    <>
      <Header />
      <ContainerHome>
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </ContainerHome>
    </>
  )
}

export default Home
