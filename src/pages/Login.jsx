import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { clienteService } from '../services/inkflowApi'
import './Login.css'

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
    <div className="login-page">
      <div className="login-header">
        <Link to="/" className="login-logo">INK FLOW</Link>
      </div>
      <div className="login-container">
        {/* Lado Esquerdo - Formulário */}
        <div className="login-left">
          <div className="login-form-wrapper">

            
            <div className="form-section">
              <h2 className="login-title">{isLogin ? 'Log in' : 'Criar Conta'}</h2>
              
              <form onSubmit={handleSubmit} className="login-form">
                {!isLogin && (
                  <div className="form-group">
                    <label htmlFor="nome">Nome Completo</label>
                    <div className="input-wrapper">
                      <span className="input-icon">👤</span>
                      <input
                        id="nome"
                        type="text"
                        name="nome"
                        placeholder="Digite seu nome completo"
                        value={formData.nome}
                        onChange={handleChange}
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <span className="input-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                        <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="currentColor" strokeWidth="1.5"></path>
                        <path d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                      </svg>
                    </span>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Digite seu email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="senha">Senha</label>
                  <div className="input-wrapper">
                    <span className="input-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                        <path d="M15.6807 14.5869C19.1708 14.5869 22 11.7692 22 8.29344C22 4.81767 19.1708 2 15.6807 2C12.1907 2 9.3615 4.81767 9.3615 8.29344C9.3615 9.90338 10.0963 11.0743 10.0963 11.0743L2.45441 18.6849C2.1115 19.0264 1.63143 19.9143 2.45441 20.7339L3.33616 21.6121C3.67905 21.9048 4.54119 22.3146 5.2466 21.6121L6.27531 20.5876C7.30403 21.6121 8.4797 21.0267 8.92058 20.4412C9.65538 19.4167 8.77362 18.3922 8.77362 18.3922L9.06754 18.0995C10.4783 19.5045 11.7128 18.6849 12.1537 18.0995C12.8885 17.075 12.1537 16.0505 12.1537 16.0505C11.8598 15.465 11.272 15.465 12.0067 14.7333L12.8885 13.8551C13.5939 14.4405 15.0439 14.5869 15.6807 14.5869Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
                        <path d="M17.8853 8.29353C17.8853 9.50601 16.8984 10.4889 15.681 10.4889C14.4635 10.4889 13.4766 9.50601 13.4766 8.29353C13.4766 7.08105 14.4635 6.09814 15.681 6.09814C16.8984 6.09814 17.8853 7.08105 17.8853 8.29353Z" stroke="currentColor" strokeWidth="1.5"></path>
                      </svg>
                    </span>
                    <input
                      id="senha"
                      type="password"
                      name="senha"
                      placeholder="Digite sua senha"
                      value={formData.senha}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                {!isLogin && (
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone</label>
                    <div className="input-wrapper">
                      <span className="input-icon">📱</span>
                      <input
                        id="telefone"
                        type="tel"
                        name="telefone"
                        placeholder="Digite seu telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}
                
                <button type="submit" className="login-btn">
                  {isLogin ? 'Entrar' : 'Criar Conta'}
                </button>
              </form>
              
              <div className="login-links">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); setIsLogin(!isLogin); }}
                  className="link-text"
                >
                  {isLogin ? 'Criar uma conta' : 'Já tem conta? Faça login'}
                </a>
                {isLogin && (
                  <a href="#" className="link-text forgot-password">
                    Esqueceu sua senha?
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito - Card Informativo */}
        <div className="login-right">
          <div className="info-card">
            <div className="card-image">
              <div className="tattoo-illustration">🎨</div>
            </div>
            <div className="card-content">
              <h3>Bem-vindo ao Ink Flow</h3>
              <p>Transforme sua paixão por tatuagem em arte. Agende seu horário e explore nossos serviços exclusivos.</p>
              <div className="info-links">
                <Link to="/portfolio" className="info-link">Ver Portfólio</Link>
                <Link to="/services" className="info-link">Nossos Serviços</Link>
                <Link to="/about" className="info-link">Sobre o Estúdio</Link>
                <Link to="/contact" className="info-link">Contato</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login