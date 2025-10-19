import { useState, useEffect, createContext, useContext } from 'react'
import { authAPI } from '../services/api'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      // Verificar se o token é válido
      setUser({ token })
    }
    setLoading(false)
  }, [])

  const login = async (credentials) => {
    try {
      const response = await authAPI.login(credentials)
      const { token, user } = response.data
      localStorage.setItem('token', token)
      setUser(user)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Erro no login' }
    }
  }

  const register = async (userData) => {
    try {
      const response = await authAPI.register(userData)
      const { token, user } = response.data
      localStorage.setItem('token', token)
      setUser(user)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Erro no cadastro' }
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  const deleteAccount = async () => {
    try {
      const response = await authAPI.deleteAccount()
      localStorage.removeItem('token')
      setUser(null)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Erro ao deletar conta' }
    }
  }

  const value = {
    user,
    login,
    register,
    logout,
    deleteAccount,
    loading,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default useAuth