import { createContext, useContext, useEffect, useState } from 'react'

type User = {
  email: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => void
  logout: () => void
  loading: boolean
  error: string
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (email: string) => {
    setLoading(true)
    setError('')

    setTimeout(() => {
      if (!email.includes('@')) {
        setError('Email inválido')
        setLoading(false)
        return
      }
      const fakeUser = { email }

      setUser(fakeUser)
      localStorage.setItem('user', JSON.stringify(email))
      setLoading(false)
    }, 1000)
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
