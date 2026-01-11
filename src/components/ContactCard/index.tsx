import { useContacts } from '../../context/ContactsContext'

import { Contact } from '../../types/Contact'

import * as S from './styles'

type Props = {
  contact: Contact
}

const ContactCard = ({ contact }: Props) => {
  const { removeContact, toggleFavorite, startEdit } = useContacts()

  return (
    <S.Card>
      <S.Info>
        <strong>{contact.name}</strong>
        <span>{contact.email}</span>
      </S.Info>
      <S.Actions>
        <S.Button onClick={() => startEdit(contact)}>Editar</S.Button>
        <S.Button onClick={() => toggleFavorite(contact.id)}>
          {contact.isFavorite ? '★' : '☆'}
        </S.Button>
        <S.Button onClick={() => removeContact(contact.id)}>Remover</S.Button>
      </S.Actions>
    </S.Card>
  )
}

export default ContactCard
