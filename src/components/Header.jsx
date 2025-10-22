import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [user, setUser] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [location])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/login')
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  const handleSobreNosClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      document.getElementById('sobre-nos')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById('sobre-nos')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <header>
      <nav>
        <Link to="/" className="logo">INK FLOW</Link>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><a href="#sobre-nos" onClick={handleSobreNosClick} className={isActive('/sobre')}>Sobre Nós</a></li>
          <li><Link to="/portfolio" className={isActive('/portfolio')}>Portfólio</Link></li>
          <li><Link to="/servicos" className={isActive('/servicos')}>Serviços</Link></li>
          <li><Link to="/agendamento" className={isActive('/agendamento')}>Agendamento</Link></li>
          <li><Link to="/contato" className={isActive('/contato')}>Contato</Link></li>
          {user ? (
            <li className="user-menu">
              <div className="user-icon" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M12 14c-6 0-8 4-8 4v2h16v-2s-2-4-8-4z"/>
                </svg>
              </div>
              <div className={`dropdown-menu ${isUserMenuOpen ? 'show' : ''}`}>
                <Link to="/perfil" onClick={() => setIsUserMenuOpen(false)}>Perfil</Link>
                {user.isAdmin && (
                  <Link to="/admin" onClick={() => setIsUserMenuOpen(false)}>Admin</Link>
                )}
                <button onClick={handleLogout}>Sair</button>
              </div>
            </li>
          ) : (
            <li><Link to="/login" className={isActive('/login')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="8" r="4"/>
                <path d="M12 14c-6 0-8 4-8 4v2h16v-2s-2-4-8-4z"/>
              </svg>
              <span style={{marginLeft: '0.5rem'}}>Login</span>
            </Link></li>
          )}
        </ul>
        <div className="nav-actions">
          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header