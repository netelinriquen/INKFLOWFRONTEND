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
      <section className="hero" style={{
        backgroundImage: "url('/assets/images/lalala.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="hero-content">
          <h1 style={{ color: '#D00000' }}>INK FLOW</h1>
          <p>Transformando pele em arte desde 2025</p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/portfolio" className="btn">Ver Portfólio</Link>
            <Link to="/agendamento" className="btn btn-outline" style={{ marginLeft: '1rem' }}>Agendar Sessão</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Arte na Pele</h2>
        <p style={{
          textAlign: 'center',
          color: 'var(--text-gray)',
          marginBottom: '3rem',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Conheça alguns dos nossos trabalhos mais representativos em diferentes técnicas e estilos artísticos
        </p>
        <div className="portfolio-section" style={{
          background: 'linear-gradient(145deg, var(--secondary-dark), #1a1a1a)',
          border: '1px solid rgba(208,0,0,0.2)',
          borderRadius: '20px',
          padding: '3rem',
          textAlign: 'center',
          marginBottom: '2rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="section-ornament" style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '60px',
            height: '3px',
            background: 'linear-gradient(90deg, var(--accent-red), transparent)'
          }}></div>
          <div className="section-ornament" style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '60px',
            height: '3px',
            background: 'linear-gradient(270deg, var(--accent-red), transparent)'
          }}></div>
          <h3 style={{
            color: 'var(--accent-red)',
            marginBottom: '1rem',
            fontSize: '1.8rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>Destaques do Portfólio</h3>
          <Carousel images={portfolioImages} />
          <p style={{ color: 'var(--text-gray)', marginTop: '1rem' }}>
            Veja mais no nosso <span style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>portfólio</span> completo
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Diferenciais Competitivos</h2>
        <div className="grid-responsive">
          <div className="card-equal">
            <div className="icon-circle">10+</div>
            <h3 className="text-primary mb-1">Experiência Comprovada</h3>
            <p className="text-gray">
              Mais de uma década de atuação no mercado com equipe especializada em técnicas avançadas de tatuagem artística e realismo fotográfico.
            </p>
          </div>
          <div className="card-equal">
            <div className="icon-circle">100%</div>
            <h3 className="text-primary mb-1">Protocolos de Segurança</h3>
            <p className="text-gray">
              Rigoroso cumprimento de normas sanitárias da ANVISA, materiais descartáveis certificados e ambiente completamente esterilizado.
            </p>
          </div>
          <div className="card-equal">
            <div className="icon-circle">TOP</div>
            <h3 className="text-primary mb-1">Tecnologia de Ponta</h3>
            <p className="text-gray">
              Equipamentos de última geração importados, tintas premium de marcas reconhecidas mundialmente e técnicas inovadoras do mercado.
            </p>
          </div>
        </div>
      </section>

      <section className="section-centered">
        <h2 className="text-center">Solicite seu Orçamento</h2>
        <p className="text-center text-gray mb-2" style={{
          fontSize: '1.1rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Agende uma consulta técnica gratuita com nossa equipe especializada e desenvolva seu projeto personalizado
        </p>
        <div className="btn-group mt-2">
          <Link to="/agendamento" className="btn btn-large">Agendar Consulta</Link>
          <Link to="/portfolio" className="btn btn-outline btn-large">Ver Portfólio Completo</Link>
        </div>
      </section>
    </div>
  )
}

export default Home