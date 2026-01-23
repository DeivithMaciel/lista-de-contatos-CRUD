import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { useAuth } from '../../context/AuthContext'

import { Error } from './styles'

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
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="email"
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
      {error && <Error className="error">{error}</Error>}
    </form>
  )
}
