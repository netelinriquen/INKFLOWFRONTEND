import { useState, useEffect } from 'react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos')
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const portfolioItems = [
    { 
      id: 1, 
      category: 'blackwork', 
      image: '/assets/images/blackwork-tattoo.jpg', 
      title: 'Blackwork Tribal',
      artist: 'Carlos Silva',
      description: 'Tatuagem blackwork com elementos tribais modernos'
    },
    { 
      id: 2, 
      category: 'aquarela', 
      image: '/assets/images/watercolor-tattoo.jpg', 
      title: 'Aquarela Floral',
      artist: 'Ana Santos',
      description: 'Técnica aquarela com flores delicadas'
    },
    { 
      id: 3, 
      category: 'realismo', 
      image: '/assets/images/messi-tattoo.jpg', 
      title: 'Retrato Realista',
      artist: 'Carlos Silva',
      description: 'Realismo fotográfico em preto e cinza'
    },
    { 
      id: 4, 
      category: 'geometrico', 
      image: '/assets/images/lobo geo.jpg', 
      title: 'Lobo Geométrico',
      artist: 'João Costa',
      description: 'Fusão de realismo com elementos geométricos'
    },
    { 
      id: 5, 
      category: 'fineline', 
      image: '/assets/images/flor.jpg', 
      title: 'Fine Line Minimalista',
      artist: 'Ana Santos',
      description: 'Traços finos e delicados com precisão'
    },
    { 
      id: 6, 
      category: 'tradicional', 
      image: '/assets/images/tradicional.jpg', 
      title: 'Old School',
      artist: 'João Costa',
      description: 'Estilo tradicional americano clássico'
    }
  ]

  const categories = [
    { key: 'todos', label: 'Todos' },
    { key: 'blackwork', label: 'Blackwork' },
    { key: 'aquarela', label: 'Aquarela' },
    { key: 'realismo', label: 'Realismo' },
    { key: 'geometrico', label: 'Geométrico' },
    { key: 'fineline', label: 'Fine Line' },
    { key: 'tradicional', label: 'Tradicional' }
  ]

  const filteredItems = activeFilter === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  const openModal = (item) => {
    setSelectedImage(item)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="portfolio">
      <section className="section" style={{ padding: '4rem 2rem', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Header com animação */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '4rem',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease'
          }}>
            <h2 style={{
              fontSize: '3.5rem',
              color: 'var(--accent-red)',
              marginBottom: '1rem',
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: '700'
            }}>Portfólio</h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.2rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Explore nossa coleção de trabalhos únicos e personalizados
            </p>
          </div>

          {/* Filtros modernos */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '3rem',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.2s'
          }}>
            {categories.map((category, index) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                style={{
                  padding: '1rem 2rem',
                  background: activeFilter === category.key 
                    ? 'linear-gradient(135deg, var(--accent-red), #ff6b9d)'
                    : 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: activeFilter === category.key 
                    ? '1px solid var(--accent-red)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '50px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeFilter === category.key 
                    ? '0 0 30px rgba(255, 0, 64, 0.3)'
                    : 'none',
                  transform: activeFilter === category.key ? 'scale(1.05)' : 'scale(1)',
                  animation: isLoaded ? `fadeInUp 0.6s ease ${index * 0.1}s both` : 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== category.key) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                    e.target.style.transform = 'scale(1.02)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== category.key) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)'
                    e.target.style.transform = 'scale(1)'
                  }
                }}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Grid de portfólio com animações */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            opacity: isLoaded ? 1 : 0,
            transition: 'all 0.8s ease 0.4s'
          }}>
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openModal(item)}
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.4s ease',
                  animation: isLoaded ? `slideInUp 0.6s ease ${index * 0.1}s both` : 'none',
                  height: '400px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)'
                  const overlay = e.currentTarget.querySelector('.overlay')
                  if (overlay) overlay.style.opacity = '1'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                  const overlay = e.currentTarget.querySelector('.overlay')
                  if (overlay) overlay.style.opacity = '0'
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)'
                  }}
                />
                
                {/* Overlay com informações */}
                <div 
                  className="overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(255, 0, 64, 0.9), rgba(196, 69, 105, 0.9))',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    padding: '2rem'
                  }}
                >
                  <h3 style={{
                    color: 'white',
                    fontSize: '1.8rem',
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>{item.title}</h3>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                  }}>por {item.artist}</p>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.9rem',
                    lineHeight: '1.4'
                  }}>{item.description}</p>
                  <div style={{
                    marginTop: '1rem',
                    padding: '0.5rem 1rem',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    color: 'white'
                  }}>
                    Clique para ampliar
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal de imagem */}
          {selectedImage && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.95)',
                backdropFilter: 'blur(20px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                padding: '2rem',
                animation: 'fadeIn 0.3s ease'
              }}
              onClick={closeModal}
            >
              <div
                style={{
                  position: 'relative',
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '70vh',
                    objectFit: 'contain'
                  }}
                />
                <div style={{
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <h3 style={{
                    color: 'var(--text-primary)',
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem'
                  }}>{selectedImage.title}</h3>
                  <p style={{
                    color: 'var(--accent-red)',
                    marginBottom: '1rem'
                  }}>por {selectedImage.artist}</p>
                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5'
                  }}>{selectedImage.description}</p>
                </div>
                <button
                  onClick={closeModal}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    color: 'white',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--accent-red)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default Portfolio