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
      <section className="section" style={{ padding: '4rem 2rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            marginBottom: '3rem',
            fontSize: '2.5rem',
            color: 'var(--text-primary)',
            fontWeight: '300'
          }}>Sobre Nós</h2>
        
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '4rem',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '3rem 2rem'
        }}>
          <p style={{ 
            fontSize: '1.3rem', 
            color: 'var(--text-primary)', 
            maxWidth: '800px', 
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            O Ink Flow é mais que um estúdio de tatuagem - somos artistas dedicados à transformação da pele em verdadeiras obras de arte.
          </p>
          <p style={{ 
            color: 'var(--text-secondary)', 
            maxWidth: '800px', 
            margin: '0 auto',
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}>
            Com mais de uma década de experiência, nossa equipe especializada domina técnicas avançadas de tatuagem artística, 
            realismo fotográfico e estilos únicos que refletem a personalidade de cada cliente.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'var(--accent-red)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'white'
            }}>2015</div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>Fundação</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Fundado em 2015 com o objetivo de elevar o padrão da tatuagem artística em São Paulo.
            </p>
          </div>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'var(--accent-red)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'white'
            }}>500+</div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>Clientes Satisfeitos</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Mais de 500 clientes atendidos com excelência e total satisfação.
            </p>
          </div>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'var(--accent-red)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'white'
            }}>100%</div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>Segurança</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              Protocolos rigorosos de segurança e higiene seguindo normas da ANVISA.
            </p>
          </div>
        </div>

        <h3 style={{ 
          textAlign: 'center', 
          color: 'var(--accent-red)', 
          margin: '4rem 0 3rem',
          fontSize: '2rem',
          fontWeight: '400'
        }}>
          Nossa Equipe
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {team.map((member, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--accent-red)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '1.5rem',
                color: 'white'
              }}>🎨</div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.3rem' }}>{member.name}</h4>
              <p style={{ color: 'var(--accent-red)', marginBottom: '1rem', fontWeight: '500' }}>{member.role}</p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Experiência: {member.experience}</p>
              <p style={{ color: 'var(--text-secondary)' }}>Especialidade: {member.specialty}</p>
            </div>
          ))}
        </div>

        <div style={{ 
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '3rem 2rem'
        }}>
          <h3 style={{ 
            color: 'var(--text-primary)', 
            marginBottom: '1.5rem',
            fontSize: '1.8rem',
            fontWeight: '400'
          }}>Nossa Missão</h3>
          <p style={{ 
            color: 'var(--text-secondary)', 
            maxWidth: '700px', 
            margin: '0 auto',
            fontSize: '1.1rem',
            lineHeight: '1.6'
          }}>
            Transformar ideias em arte permanente, respeitando a individualidade de cada cliente e 
            mantendo os mais altos padrões de qualidade, segurança e atendimento personalizado.
          </p>
        </div>
        </div>
      </section>
    </div>
  )
}

export default About