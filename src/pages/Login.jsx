import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { clienteService } from '../services/inkflowApi'
import axios from 'axios'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    nome: '',
    telefone: ''
  })
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Login de admin
    if (isLogin && formData.email === 'admin@inkflow.com' && formData.senha === 'admin123') {
      localStorage.setItem('user', JSON.stringify({ 
        email: formData.email, 
        nome: 'Administrador',
        isAdmin: true 
      }))
      alert('Login de administrador realizado!')
      navigate('/admin')
      return
    }
    
    try {
      if (isLogin) {
        // Buscar cliente por email para fazer login
        const response = await clienteService.getAll()
        const cliente = response.data.find(c => 
          c.email === formData.email && c.password === formData.senha
        )
        
        if (cliente) {
          localStorage.setItem('user', JSON.stringify({
            id: cliente.id,
            email: cliente.email,
            nome: cliente.fullName || cliente.username,
            isAdmin: false
          }))
          alert('Login realizado com sucesso!')
          navigate('/agendamento')
        } else {
          alert('Email ou senha incorretos!')
        }
      } else {
        // Cadastro - criar cliente no backend
        const novoCliente = {
          username: formData.email.split('@')[0],
          email: formData.email,
          password: formData.senha,
          fullName: formData.nome
        }
        
        await clienteService.create(novoCliente)
        
        alert('Cadastro realizado com sucesso! Faça login para continuar.')
        setIsLogin(true)
        setFormData({ email: '', senha: '', nome: '', telefone: '' })
      }
    } catch (error) {
      console.error('Erro:', error)
      if (isLogin) {
        alert('Erro ao fazer login. Verifique suas credenciais.')
      } else {
        if (error.response?.status === 400) {
          alert('Email já cadastrado!')
        } else {
          alert('Erro ao processar solicitação. Tente novamente.')
        }
      }
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="login">
      <section className="section">
        <div className="form-container" style={{ maxWidth: '400px', margin: '0 auto' }}>
          <h2>{isLogin ? 'Login' : 'Cadastro'}</h2>
          
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-group">
                <label>Nome *</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required={!isLogin}
                />
              </div>
            )}
            

            
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Senha *</label>
              <input
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
            </div>
            
            {!isLogin && (
              <div className="form-group">
                <label>Telefone</label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                />
              </div>
            )}
            
            <button type="submit" className="btn" style={{ width: '100%' }}>
              {isLogin ? 'Entrar' : 'Cadastrar'}
            </button>
          </form>
          
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>
            {isLogin ? 'Não tem conta?' : 'Já tem conta?'}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              style={{ background: 'none', border: 'none', color: 'var(--accent-red)', marginLeft: '0.5rem', cursor: 'pointer' }}
            >
              {isLogin ? 'Cadastre-se' : 'Faça login'}
            </button>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Login