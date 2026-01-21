import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Toast from './components/Toast'
import Home from './pages/Home'

import { GlobalStyle } from './styles/GlobalStyles'
import { PrivateRoute } from './routes/PrivateRoute'
import { Login } from './pages/Login'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <>
                  <Home />
                  <Toast />
                </>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
