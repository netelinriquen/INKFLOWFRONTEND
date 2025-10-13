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
    <header className="header-modern" style={{
      backgroundImage: "linear-gradient(rgba(10, 10, 10, 0.95), rgba(10, 10, 10, 0.95)), url('/assets/images/lalala.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <nav>
        <Link to="/" className="logo-modern">INK FLOW</Link>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={`nav-link-modern ${isActive('/')}`}>🏠 Home</Link></li>
          <li><Link to="/sobre" className={`nav-link-modern ${isActive('/sobre')}`}>👥 Sobre Nós</Link></li>
          <li><Link to="/portfolio" className={`nav-link-modern ${isActive('/portfolio')}`}>🎨 Portfólio</Link></li>
          <li><Link to="/servicos" className={`nav-link-modern ${isActive('/servicos')}`}>✨ Serviços</Link></li>
          <li><Link to="/agendamento" className={`nav-link-modern ${isActive('/agendamento')}`}>📅 Agendamento</Link></li>
          <li><Link to="/contato" className={`nav-link-modern ${isActive('/contato')}`}>📞 Contato</Link></li>
        </ul>
        <div className="nav-actions">
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Olá, {user.nome || user.email}</span>
              {user.isAdmin && (
                <Link to="/admin" className="btn-modern" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>⚙️ Admin</Link>
              )}
              <button onClick={handleLogout} className="btn-modern btn-outline-modern" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Sair</button>
            </div>
          ) : (
            <Link to="/login" className="btn-modern" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>🔑 Login</Link>
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