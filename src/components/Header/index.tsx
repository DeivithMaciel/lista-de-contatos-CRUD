import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'

import * as S from './styles'

const Header = () => {
  const { logout, user } = useAuth()
  const navigate = useNavigate()

  const email = user?.email ?? ''

  const initial = email.charAt(0).toUpperCase()
  const shortEmail = email.length > 15 ? email.slice(0, 15) + '...' : email

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  if (!user) return null

  return (
    <S.Container>
      <S.Title>Lista de contatos</S.Title>
      <S.InfoUser>
        <div className="avatar">
          <strong>{initial}</strong>
          <span>{shortEmail}</span>
        </div>
        <button onClick={handleLogout}>Sair</button>
      </S.InfoUser>
    </S.Container>
  )
}

export default Header
