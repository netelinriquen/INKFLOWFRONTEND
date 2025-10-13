import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

  return (
    <header style={{
      backgroundImage: "url('/assets/images/lalala.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <nav>
        <Link to="/" className="logo">INK FLOW</Link>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/sobre" className={isActive('/sobre')}>Sobre Nós</Link></li>
          <li><Link to="/portfolio" className={isActive('/portfolio')}>Portfólio</Link></li>
          <li><Link to="/servicos" className={isActive('/servicos')}>Serviços</Link></li>
          <li><Link to="/agendamento" className={isActive('/agendamento')}>Agendamento</Link></li>
          <li><Link to="/contato" className={isActive('/contato')}>Contato</Link></li>
        </ul>
        <div className="nav-actions">
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Link to="/perfil" style={{ color: 'var(--text-light)', fontSize: '1.5rem', textDecoration: 'none' }}>👤</Link>
              {user.isAdmin && (
                <Link to="/admin" className="login-btn">⚙️</Link>
              )}
              <button onClick={handleLogout} className="login-btn" style={{ color: 'var(--accent-red)' }}>Sair</button>
            </div>
          ) : (
            <Link to="/login" className="login-btn">Login</Link>
          )}
          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header