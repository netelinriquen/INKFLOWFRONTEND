import { useState } from 'react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos')

  const portfolioItems = [
    { id: 1, category: 'blackwork', image: '/assets/images/blackwork-tattoo.jpg', title: 'Blackwork', description: 'Arte em preto sólido' },
    { id: 2, category: 'aquarela', image: '/assets/images/watercolor-tattoo.jpg', title: 'Aquarela', description: 'Efeito de tinta aquarela' },
    { id: 3, category: 'realismo', image: '/assets/images/messi-tattoo.jpg', title: 'Realismo', description: 'Hiper-realismo fotográfico' },
    { id: 4, category: 'geometrico', image: '/assets/images/lobo geo.jpg', title: 'Geométrico', description: 'Formas geométricas precisas' },
    { id: 5, category: 'fineline', image: '/assets/images/flor.jpg', title: 'Fine Line', description: 'Traços finos e delicados' },
    { id: 6, category: 'tradicional', image: '/assets/images/tradicional.jpg', title: 'Tradicional', description: 'Estilo clássico americano' }
  ]

  const filterLabels = {
    todos: '🎨 Todos',
    blackwork: '⬛ Blackwork',
    aquarela: '🎨 Aquarela',
    realismo: '📷 Realismo',
    geometrico: '🔶 Geométrico',
    fineline: '✨ Fine Line',
    tradicional: '🎭 Tradicional'
  }

  const filteredItems = activeFilter === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <div className="portfolio">
      <section className="section-modern">
        <div className="section-title-modern">
          <h2>Portfólio</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Explore nossa coleção de trabalhos artísticos em diferentes estilos e técnicas de tatuagem
          </p>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {Object.entries(filterLabels).map(([filter, label]) => (
            <button
              key={filter}
              className={`btn-modern ${activeFilter === filter ? '' : 'btn-outline-modern'}`}
              onClick={() => setActiveFilter(filter)}
              style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid-modern" style={{ gap: '2rem' }}>
          {filteredItems.map((item, index) => (
            <div key={item.id} className={`glass-card fade-in-up`} style={{
              padding: '0',
              overflow: 'hidden',
              animationDelay: `${index * 0.1}s`
            }}>
              <div className="image-hover-effect">
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{
                  background: 'var(--gradient-red)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem',
                  fontSize: '1.2rem'
                }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              Nenhum trabalho encontrado para esta categoria.
            </p>
          </div>
        )}
      </section>
    </div>
  )
}

export default Portfolio