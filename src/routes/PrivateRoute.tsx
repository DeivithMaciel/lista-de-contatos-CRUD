import { Navigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" />
  }
  return children
}
// resumo mental: react tenta entrar no home, privateRoute faz um filtro, se usuario for falso/existir retorna login, se sim, vai para home.
