import { useContacts } from '../../context/ContactsContext'

import Header from '../../components/Header'
import ContactCard from '../../components/ContactCard'
import ContactForm from '../../components/ContactForm'

import { ContainerHome } from './styles'

const Home = () => {
  const { contacts } = useContacts()

  const orderedContacts = [...contacts].sort(
    (a, b) => Number(b.isFavorite) - Number(a.isFavorite)
  )

  return (
    <>
      <Header />
      <ContainerHome>
        <ContactForm />
        {orderedContacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </ContainerHome>
    </>
  )
}

export default Home
