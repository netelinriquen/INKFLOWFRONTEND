import { useState } from 'react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos')

  const portfolioItems = [
    { id: 1, category: 'blackwork', image: '/assets/images/blackwork-tattoo.jpg', title: 'Blackwork', artist: 'Lilly Kuiavski' },
    { id: 2, category: 'aquarela', image: '/assets/images/watercolor-tattoo.jpg', title: 'Aquarela', artist: 'Lilly Kuiavski' },
    { id: 3, category: 'realismo', image: '/assets/images/messi-tattoo.jpg', title: 'Realismo', artist: 'Lilly Kuiavski' },
    { id: 4, category: 'geometrico', image: '/assets/images/lobo geo.jpg', title: 'Geométrico', artist: 'Lilly Kuiavski' },
    { id: 5, category: 'fineline', image: '/assets/images/flor.jpg', title: 'Fine Line', artist: 'Lilly Kuiavski' },
    { id: 6, category: 'tradicional', image: '/assets/images/tradicional.jpg', title: 'Tradicional', artist: 'Lilly Kuiavski' }
  ]

  const filteredItems = activeFilter === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <div className="portfolio" style={{
      background: 'linear-gradient(145deg, #050505, #0f0f0f)',
      minHeight: '100vh'
    }}>
      <section className="section" style={{ paddingTop: '8rem' }}>
        <h2 style={{
          fontFamily: 'Bebas Neue, cursive',
          fontSize: '3rem',
          textAlign: 'center',
          color: 'var(--accent-red)',
          marginBottom: '3rem'
        }}>Portfólio</h2>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {['todos', 'blackwork', 'aquarela', 'realismo', 'geometrico', 'fineline', 'tradicional'].map(filter => (
            <button
              key={filter}
              style={{
                padding: '8px 20px',
                background: activeFilter === filter ? 'var(--accent-red)' : 'transparent',
                color: activeFilter === filter ? 'white' : 'var(--text-light)',
                border: '1px solid var(--accent-red)',
                borderRadius: '25px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem'
              }}
              onClick={() => setActiveFilter(filter)}
              onMouseEnter={(e) => {
                if (activeFilter !== filter) {
                  e.target.style.background = 'rgba(220, 20, 60, 0.2)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter) {
                  e.target.style.background = 'transparent'
                }
              }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {filteredItems.map(item => (
            <div key={item.id} style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '0',
              height: '350px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector('img')
              const overlay = e.currentTarget.querySelector('.overlay')
              img.style.transform = 'scale(1.1)'
              overlay.style.opacity = '1'
            }} onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector('img')
              const overlay = e.currentTarget.querySelector('.overlay')
              img.style.transform = 'scale(1)'
              overlay.style.opacity = '0'
            }}>
              <img 
                src={item.image} 
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />
              <div 
                className="overlay"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  background: 'linear-gradient(transparent 60%, rgba(0,0,0,0.9))',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem',
                  opacity: '0',
                  transition: 'opacity 0.3s ease'
                }}
              >
                <h3 style={{
                  color: 'white',
                  margin: '0 0 0.5rem 0',
                  fontSize: '1.2rem',
                  fontWeight: 'bold'
                }}>{item.title}</h3>
                <p style={{
                  color: 'var(--accent-red)',
                  margin: '0',
                  fontSize: '0.9rem'
                }}>Por {item.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Portfolio