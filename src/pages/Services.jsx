const Services = () => {
  const services = [
    {
      title: 'Blackwork',
      description: 'Tatuagens em preto sólido com designs geométricos e tribais',
      price: 'A partir de R$ 200',
      image: '/assets/images/blackwork-tattoo.jpg',
      icon: '⬛',
      features: ['Preto sólido', 'Designs geométricos', 'Estilo tribal']
    },
    {
      title: 'Aquarela',
      description: 'Técnica que simula pintura em aquarela na pele',
      price: 'A partir de R$ 300',
      image: '/assets/images/watercolor-tattoo.jpg',
      icon: '🎨',
      features: ['Efeito aquarela', 'Cores vibrantes', 'Estilo artístico']
    },
    {
      title: 'Realismo',
      description: 'Tatuagens hiper-realistas com detalhes fotográficos',
      price: 'A partir de R$ 400',
      image: '/assets/images/messi-tattoo.jpg',
      icon: '📷',
      features: ['Hiper-realismo', 'Detalhes fotográficos', 'Sombreamento avançado']
    },
    {
      title: 'Geométrico',
      description: 'Designs com formas geométricas e padrões matemáticos',
      price: 'A partir de R$ 250',
      image: '/assets/images/lobo geo.jpg',
      icon: '🔶',
      features: ['Formas geométricas', 'Padrões matemáticos', 'Precisão técnica']
    },
    {
      title: 'Fine Line',
      description: 'Traços finos e delicados para designs minimalistas',
      price: 'A partir de R$ 150',
      image: '/assets/images/flor.jpg',
      icon: '✨',
      features: ['Traços finos', 'Design minimalista', 'Delicadeza']
    },
    {
      title: 'Tradicional',
      description: 'Estilo clássico americano com cores vibrantes',
      price: 'A partir de R$ 200',
      image: '/assets/images/tradicional.jpg',
      icon: '🎭',
      features: ['Estilo clássico', 'Cores vibrantes', 'Contornos marcados']
    }
  ]

  return (
    <div className="services">
      <section className="section-modern">
        <div className="section-title-modern">
          <h2>Nossos Serviços</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Oferecemos diversos estilos de tatuagem com a mais alta qualidade e segurança
          </p>
        </div>
        
        <div className="grid-modern">
          {services.map((service, index) => (
            <div key={index} className={`service-card-modern fade-in-up`} style={{
              animationDelay: `${index * 0.1}s`
            }}>
              <div className="service-icon-modern">{service.icon}</div>
              
              <div className="image-hover-effect" style={{ marginBottom: '1.5rem' }}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 'var(--border-radius-md)'
                  }}
                />
              </div>
              
              <h3 style={{
                background: 'var(--gradient-red)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1rem',
                fontSize: '1.3rem'
              }}>{service.title}</h3>
              
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {service.description}
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                {service.features.map((feature, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                  }}>
                    <span style={{ color: 'var(--accent-red)' }}>✓</span>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div style={{
                marginTop: 'auto',
                padding: '1rem 0',
                borderTop: '1px solid rgba(255, 0, 64, 0.2)'
              }}>
                <p style={{
                  background: 'var(--gradient-red)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  marginBottom: '1rem'
                }}>
                  {service.price}
                </p>
                <a href="/agendamento" className="btn-modern" style={{ width: '100%', justifyContent: 'center' }}>
                  📅 Agendar
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', marginTop: '4rem' }}>
          <h3 style={{
            background: 'var(--gradient-red)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1.5rem'
          }}>💰 Informações sobre Preços</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Todos os preços são estimativas. O valor final depende do tamanho, complexidade e localização da tatuagem.
            Oferecemos consulta gratuita para orçamento personalizado.
          </p>
          <a href="/agendamento" className="btn-modern">💵 Solicitar Orçamento Gratuito</a>
        </div>
      </section>
    </div>
  )
}

export default Services