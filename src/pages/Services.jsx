const Services = () => {
  const services = [
    {
      title: 'Blackwork',
      description: 'Tatuagens em preto sólido com designs geométricos e tribais',
      price: 'A partir de R$ 200',
      image: '/assets/images/blackwork-tattoo.jpg'
    },
    {
      title: 'Aquarela',
      description: 'Técnica que simula pintura em aquarela na pele',
      price: 'A partir de R$ 300',
      image: '/assets/images/watercolor-tattoo.jpg'
    },
    {
      title: 'Realismo',
      description: 'Tatuagens hiper-realistas com detalhes fotográficos',
      price: 'A partir de R$ 400',
      image: '/assets/images/messi-tattoo.jpg'
    },
    {
      title: 'Geométrico',
      description: 'Designs com formas geométricas e padrões matemáticos',
      price: 'A partir de R$ 250',
      image: '/assets/images/lobo geo.jpg'
    },
    {
      title: 'Fine Line',
      description: 'Traços finos e delicados para designs minimalistas',
      price: 'A partir de R$ 150',
      image: '/assets/images/flor.jpg'
    },
    {
      title: 'Tradicional',
      description: 'Estilo clássico americano com cores vibrantes',
      price: 'A partir de R$ 200',
      image: '/assets/images/tradicional.jpg'
    }
  ]

  return (
    <div className="services">
      <section className="section" style={{ paddingTop: '8rem' }}>
        <h2>Nossos Serviços</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-gray)', marginBottom: '3rem' }}>
          Oferecemos diversos estilos de tatuagem com a mais alta qualidade e segurança
        </p>
        
        <div className="grid">
          {services.map((service, index) => (
            <div key={index} className="card">
              <img src={service.image} alt={service.title} />
              <h3 className="text-primary">{service.title}</h3>
              <p className="text-gray">{service.description}</p>
              <p className="text-primary" style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                {service.price}
              </p>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p className="text-gray mb-2">
            Todos os preços são estimativas. O valor final depende do tamanho, complexidade e localização da tatuagem.
          </p>
          <a href="/agendamento" className="btn">Solicitar Orçamento</a>
        </div>
      </section>
    </div>
  )
}

export default Services