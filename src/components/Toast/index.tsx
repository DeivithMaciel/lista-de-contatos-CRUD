import { useContacts } from '../../context/ContactsContext'

import { ToastBox } from './styles'

export const Toast = () => {
  const { message } = useContacts()

  if (!message) return null

  return <ToastBox>{message}</ToastBox>
}
