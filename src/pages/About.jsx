const About = () => {
  const team = [
    {
      name: 'Carlos Silva',
      role: 'Tatuador Principal',
      experience: '12 anos',
      specialty: 'Realismo e Blackwork'
    },
    {
      name: 'Ana Santos',
      role: 'Tatuadora',
      experience: '8 anos',
      specialty: 'Fine Line e Aquarela'
    },
    {
      name: 'João Costa',
      role: 'Tatuador',
      experience: '10 anos',
      specialty: 'Tradicional e Geométrico'
    }
  ]

  return (
    <div className="about">
      <section className="section">
        <h2>Sobre Nós</h2>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-gray)', maxWidth: '800px', margin: '0 auto 2rem' }}>
            O Ink Flow é mais que um estúdio de tatuagem - somos artistas dedicados à transformação da pele em verdadeiras obras de arte.
          </p>
          <p style={{ color: 'var(--text-gray)', maxWidth: '800px', margin: '0 auto' }}>
            Com mais de uma década de experiência, nossa equipe especializada domina técnicas avançadas de tatuagem artística, 
            realismo fotográfico e estilos únicos que refletem a personalidade de cada cliente.
          </p>
        </div>

        <div className="grid-responsive">
          <div className="card-equal">
            <div className="icon-circle">2015</div>
            <h3 className="text-primary mb-1">Fundação</h3>
            <p className="text-gray">
              Fundado em 2015 com o objetivo de elevar o padrão da tatuagem artística em São Paulo.
            </p>
          </div>
          <div className="card-equal">
            <div className="icon-circle">500+</div>
            <h3 className="text-primary mb-1">Clientes Satisfeitos</h3>
            <p className="text-gray">
              Mais de 500 clientes atendidos com excelência e total satisfação.
            </p>
          </div>
          <div className="card-equal">
            <div className="icon-circle">100%</div>
            <h3 className="text-primary mb-1">Segurança</h3>
            <p className="text-gray">
              Protocolos rigorosos de segurança e higiene seguindo normas da ANVISA.
            </p>
          </div>
        </div>

        <h3 style={{ textAlign: 'center', color: 'var(--accent-red)', margin: '3rem 0 2rem' }}>
          Nossa Equipe
        </h3>
        
        <div className="grid">
          {team.map((member, index) => (
            <div key={index} className="card">
              <h4 className="text-primary">{member.name}</h4>
              <p className="text-gray">{member.role}</p>
              <p className="text-light">Experiência: {member.experience}</p>
              <p className="text-gray">Especialidade: {member.specialty}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <h3 className="text-primary mb-2">Nossa Missão</h3>
          <p style={{ color: 'var(--text-gray)', maxWidth: '600px', margin: '0 auto' }}>
            Transformar ideias em arte permanente, respeitando a individualidade de cada cliente e 
            mantendo os mais altos padrões de qualidade, segurança e atendimento personalizado.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About