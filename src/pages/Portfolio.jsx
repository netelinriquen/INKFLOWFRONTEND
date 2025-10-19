import { useState } from 'react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos')

  const portfolioItems = [
    { id: 1, category: 'blackwork', image: '/assets/images/blackwork-tattoo.jpg', title: 'Blackwork' },
    { id: 2, category: 'aquarela', image: '/assets/images/watercolor-tattoo.jpg', title: 'Aquarela' },
    { id: 3, category: 'realismo', image: '/assets/images/messi-tattoo.jpg', title: 'Realismo' },
    { id: 4, category: 'geometrico', image: '/assets/images/lobo geo.jpg', title: 'Geométrico' },
    { id: 5, category: 'fineline', image: '/assets/images/flor.jpg', title: 'Fine Line' },
    { id: 6, category: 'tradicional', image: '/assets/images/tradicional.jpg', title: 'Tradicional' }
  ]

  const filteredItems = activeFilter === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <div className="portfolio">
      <section className="section" style={{ paddingTop: '8rem' }}>
        <h2>Portfólio</h2>
        
        <div className="filter-buttons">
          {['todos', 'blackwork', 'aquarela', 'realismo', 'geometrico', 'fineline', 'tradicional'].map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <img src={item.image} alt={item.title} />
              <div className="portfolio-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Portfolio