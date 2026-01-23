import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { useAuth } from '../../context/AuthContext'

import * as S from './styles'

export const Login = () => {
  const { login, loading, error, user } = useAuth()
  const Navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(email, password)
  }

  useEffect(() => {
    if (user) {
      Navigate('/')
    }
  }, [user, Navigate])

  return (
    <S.Page>
      <S.FormLogin onSubmit={handleSubmit}>
        <h2>Lista de contatos</h2>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </button>
        {error && <S.Error className="error">{error}</S.Error>}
      </S.FormLogin>
    </S.Page>
  )
}
