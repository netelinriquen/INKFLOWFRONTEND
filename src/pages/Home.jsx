import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'

const Home = () => {
  const portfolioImages = [
    { src: '/assets/images/blackwork-tattoo.jpg', alt: 'Blackwork Tattoo' },
    { src: '/assets/images/watercolor-tattoo.jpg', alt: 'Watercolor Tattoo' },
    { src: '/assets/images/messi-tattoo.jpg', alt: 'Realismo Tattoo' },
    { src: '/assets/images/mandala.jpg', alt: 'Mandala Tattoo' },
    { src: '/assets/images/lobo geo.jpg', alt: 'Geométrica Tattoo' },
    { src: '/assets/images/flor.jpg', alt: 'Fine Line Tattoo' }
  ]

  return (
    <div className="home">
      <section className="hero hero-modern liquid-bg" style={{
        backgroundImage: "linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.8)), url('/assets/images/lalala.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="hero-content">
          <h1 className="hero-title-modern gradient-text-animated glow-red">INK FLOW</h1>
          <p className="hero-subtitle-modern fade-in-up">Transformando pele em arte desde 2025</p>
          <div className="fade-in-up" style={{ 
            marginTop: '3rem', 
            display: 'flex', 
            gap: '1rem', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            animationDelay: '0.3s'
          }}>
            <Link to="/portfolio" className="btn-modern magnetic ripple">✨ Ver Portfólio</Link>
            <Link to="/agendamento" className="btn-modern btn-outline-modern magnetic ripple">📅 Agendar Sessão</Link>
          </div>
        </div>
      </section>

      <section className="section-modern">
        <div className="section-title-modern">
          <h2>Arte na Pele</h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Conheça alguns dos nossos trabalhos mais representativos em diferentes técnicas e estilos artísticos
          </p>
        </div>
        <div className="glass-card neon-border floating" style={{
          padding: '3rem',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h3 className="gradient-text-animated" style={{
            marginBottom: '2rem',
            fontSize: '1.8rem'
          }}>🎨 Destaques do Portfólio</h3>
          <div className="carousel-modern scale-in">
            <Carousel images={portfolioImages} />
          </div>
          <p className="fade-in-up" style={{ 
            color: 'var(--text-secondary)', 
            marginTop: '2rem', 
            fontSize: '1.1rem',
            animationDelay: '0.5s'
          }}>
            Veja mais no nosso <span className="gradient-text-animated" style={{ fontWeight: 'bold' }}>portfólio</span> completo
          </p>
        </div>
      </section>

      <section className="section-modern">
        <div className="section-title-modern">
          <h2>Diferenciais Competitivos</h2>
        </div>
        <div className="grid-modern">
          <div className="service-card-modern fade-in-up holographic magnetic">
            <div className="service-icon-modern floating">⭐</div>
            <h3 style={{
              background: 'var(--gradient-red)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>Experiência Comprovada</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Mais de uma década de atuação no mercado com equipe especializada em técnicas avançadas de tatuagem artística e realismo fotográfico.
            </p>
          </div>
          <div className="service-card-modern fade-in-up holographic magnetic">
            <div className="service-icon-modern floating">🛡️</div>
            <h3 style={{
              background: 'var(--gradient-red)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>Protocolos de Segurança</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Rigoroso cumprimento de normas sanitárias da ANVISA, materiais descartáveis certificados e ambiente completamente esterilizado.
            </p>
          </div>
          <div className="service-card-modern fade-in-up holographic magnetic">
            <div className="service-icon-modern floating">🚀</div>
            <h3 style={{
              background: 'var(--gradient-red)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>Tecnologia de Ponta</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Equipamentos de última geração importados, tintas premium de marcas reconhecidas mundialmente e técnicas inovadoras do mercado.
            </p>
          </div>
        </div>
      </section>

      <section className="section-modern" style={{ textAlign: 'center' }}>
        <div className="glass-card neon-border pulse" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="gradient-text-animated" style={{ marginBottom: '2rem' }}>💎 Solicite seu Orçamento</h2>
          <p className="fade-in-up" style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            lineHeight: '1.8'
          }}>
            Agende uma consulta técnica gratuita com nossa equipe especializada e desenvolva seu projeto personalizado
          </p>
          <div className="fade-in-up" style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            animationDelay: '0.3s'
          }}>
            <Link to="/agendamento" className="btn-modern magnetic ripple glow-red">📅 Agendar Consulta</Link>
            <Link to="/portfolio" className="btn-modern btn-outline-modern magnetic ripple">🎨 Ver Portfólio Completo</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home