import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import './Home.css'

const Home = () => {
  const portfolioImages = [
    { src: '/assets/images/blackwork-tattoo.jpg', alt: 'Blackwork Tattoo', title: 'Blackwork', description: 'Tatuagem em preto sólido com traços marcantes e contrastes intensos, criando designs geométricos e tribais únicos.' },
    { src: '/assets/images/watercolor-tattoo.jpg', alt: 'Watercolor Tattoo', title: 'Aquarela', description: 'Técnica que simula pintura em aquarela na pele, com cores vibrantes e efeitos de respingo artísticos.' },
    { src: '/assets/images/messi-tattoo.jpg', alt: 'Realismo Tattoo', title: 'Realismo', description: 'Tatuagens hiper-realistas com detalhes fotográficos, capturando expressões e texturas com precisão.' },
    { src: '/assets/images/mandala.jpg', alt: 'Mandala Tattoo', title: 'Mandala', description: 'Designs circulares sagrados com padrões simétricos complexos, representando harmonia e equilíbrio.' },
    { src: '/assets/images/lobo geo.jpg', alt: 'Geométrica Tattoo', title: 'Geométrico', description: 'Combinação de formas geométricas com elementos naturais, criando designs modernos e estruturados.' },
    { src: '/assets/images/flor.jpg', alt: 'Fine Line Tattoo', title: 'Fine Line', description: 'Traços finos e delicados para designs minimalistas, perfeitos para tatuagens sutis e elegantes.' }
  ]

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 style={{ color: '#D00000' }}>INK FLOW</h1>
          <p>Transformando pele em arte desde 2025</p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/portfolio" className="btn">Ver Portfólio</Link>
            <Link to="/agendamento" className="btn btn-outline" style={{ marginLeft: '1rem' }}>Agendar Sessão</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="experience-section" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div className="experience-left">
            <h2 style={{
              fontFamily: 'Bebas Neue, cursive',
              fontSize: '3rem',
              color: 'var(--accent-red)',
              marginBottom: '1.5rem',
              lineHeight: '1'
            }}>Experiência</h2>
            <p style={{
              color: 'var(--text-gray)',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              fontWeight: '300'
            }}>
              Mais de uma década transformando pele em arte, com especialização em técnicas avançadas e 
              compromisso absoluto com a excelência artística e segurança. Nossa jornada evoluiu constantemente 
              através de cursos especializados e certificações rigorosas, garantindo resultados que superam 
              expectativas e resistem ao tempo.
            </p>
          </div>
          
          <div className="experience-right">
            <div className="experience-item" style={{
              borderBottom: '1px solid var(--tertiary-dark)',
              paddingBottom: '2rem',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--text-light)', fontSize: '1.2rem', margin: '0' }}>Realismo Fotográfico</h3>
                <span style={{ color: 'var(--accent-red)', fontSize: '0.9rem' }}>2015 - Presente</span>
              </div>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', margin: '0' }}>Especialização em técnicas hiper-realistas</p>
            </div>
            
            <div className="experience-item" style={{
              borderBottom: '1px solid var(--tertiary-dark)',
              paddingBottom: '2rem',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--text-light)', fontSize: '1.2rem', margin: '0' }}>Blackwork & Geométrico</h3>
                <span style={{ color: 'var(--accent-red)', fontSize: '0.9rem' }}>2018 - Presente</span>
              </div>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', margin: '0' }}>Domínio em designs complexos e abstratos</p>
            </div>
            
            <div className="experience-item" style={{
              borderBottom: '1px solid var(--tertiary-dark)',
              paddingBottom: '2rem',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--text-light)', fontSize: '1.2rem', margin: '0' }}>Aquarela & Fine Line</h3>
                <span style={{ color: 'var(--accent-red)', fontSize: '0.9rem' }}>2020 - Presente</span>
              </div>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', margin: '0' }}>Técnicas delicadas e artísticas modernas</p>
            </div>
            
            <div className="experience-item">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ color: 'var(--text-light)', fontSize: '1.2rem', margin: '0' }}>Certificação ANVISA</h3>
                <span style={{ color: 'var(--accent-red)', fontSize: '0.9rem' }}>Renovado 2024</span>
              </div>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', margin: '0' }}>Protocolos de segurança e higiene</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-nos" style={{
        padding: '4rem 2rem',
        background: '#000',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          left: '-20%',
          top: '-10%',
          width: '60%',
          height: '110%',
          background: 'linear-gradient(135deg, var(--accent-red), #cc1f1f)',
          clipPath: 'polygon(30% 0, 100% 0, 70% 100%, 0% 100%)',
          zIndex: 0,
          opacity: 0.8
        }} />
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="/assets/images/Retrato INK.png" 
              alt="Retrato INK" 
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }} 
            />
          </div>
          
          <div style={{
            color: 'white'
          }}>
            <p style={{
              color: 'var(--accent-red)',
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '1rem',
              letterSpacing: '2px'
            }}>BEM VINDO AO INK FLOW</p>
            
            <h2 style={{
              fontFamily: 'Bebas Neue, cursive',
              fontSize: '3.5rem',
              color: 'white',
              marginBottom: '2rem',
              lineHeight: '1.1'
            }}>NÓS SOMOS O MELHOR ESTÚDIO DE TATUAGEM</h2>
            
            <p style={{
              color: '#ccc',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              marginBottom: '2rem'
            }}>
              Nossa missão é transformar sua pele em uma obra de arte única. Com mais de 10 anos de experiência, 
              combinamos técnicas tradicionais com inovação artística para criar tatuagens que contam sua história.
            </p>
            
            <div style={{
              marginBottom: '2rem'
            }}>
              <div style={{
                fontFamily: 'cursive',
                fontSize: '1.5rem',
                color: 'var(--accent-red)',
                marginBottom: '0.5rem'
              }}>Lilly Kuiavski</div>
              <p style={{
                color: '#999',
                fontSize: '0.9rem'
              }}>Fundador & Artista Principal</p>
            </div>
            
            <a href="https://wa.me/5511999999999" style={{
              background: '#25d366',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
            }} onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)'
            }} onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)'
            }}>
              <span>📱</span>
              ORÇAMENTO WHATSAPP
            </a>
          </div>
        </div>
        
        <div style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.02) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(135deg, rgba(255,255,255,0.01) 25%, transparent 25%),
            linear-gradient(45deg, rgba(255,255,255,0.01) 25%, transparent 25%),
            linear-gradient(145deg, #1a1a1a, #0f0f0f)
          `,
          backgroundSize: '60px 60px, 80px 80px, 40px 40px, 40px 40px, 100% 100%',
          margin: '6rem 2rem 0 2rem',
          padding: '3rem 2rem',
          borderRadius: '16px',
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: '1px solid rgba(255,255,255,0.1)',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <img src="/assets/icons/clients.svg" alt="Clientes" style={{
                width: '48px',
                height: '48px',
                marginBottom: '0.5rem'
              }} />
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '0.5rem'
              }}>1.500<span style={{ color: 'var(--accent-red)' }}>+</span></div>
              <p style={{
                color: '#ccc',
                fontSize: '0.9rem',
                margin: 0
              }}>Clientes Satisfeitos</p>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <img src="/assets/icons/arts.svg" alt="Artes" style={{
                width: '48px',
                height: '48px',
                marginBottom: '0.5rem'
              }} />
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '0.5rem'
              }}>1.200<span style={{ color: 'var(--accent-red)' }}>+</span></div>
              <p style={{
                color: '#ccc',
                fontSize: '0.9rem',
                margin: 0
              }}>Artes Criadas</p>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <img src="/assets/icons/years.svg" alt="Experiência" style={{
                width: '48px',
                height: '48px',
                marginBottom: '0.5rem'
              }} />
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '0.5rem'
              }}>10<span style={{ color: 'var(--accent-red)' }}>+</span></div>
              <p style={{
                color: '#ccc',
                fontSize: '0.9rem',
                margin: 0
              }}>Anos de Experiência</p>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <img src="/assets/icons/team.svg" alt="Time" style={{
                width: '48px',
                height: '48px',
                marginBottom: '0.5rem'
              }} />
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '0.5rem'
              }}>100<span style={{ color: 'var(--accent-red)' }}>%</span></div>
              <p style={{
                color: '#ccc',
                fontSize: '0.9rem',
                margin: 0
              }}>Time Profissional</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--secondary-dark) 100%)'
      }}>
        <div className="portfolio-section" style={{
          background: 'linear-gradient(145deg, #0f0f0f, #1a1a1a)',
          padding: '3rem 2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '0'
        }}>

          <h2 style={{
            fontFamily: 'Bebas Neue, cursive',
            fontSize: '3rem',
            color: 'var(--accent-red)',
            marginBottom: '1rem'
          }}>Arte na Pele</h2>
          <p style={{
            color: 'var(--text-gray)',
            marginBottom: '2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Conheça alguns dos nossos trabalhos mais representativos em diferentes técnicas e estilos artísticos
          </p>
          <Carousel images={portfolioImages} />
          <p style={{ color: 'var(--text-gray)', marginTop: '1rem' }}>
            Veja mais no nosso <span style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>portfólio</span> completo
          </p>
        </div>
      </section>

      <section style={{
        padding: '4rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontFamily: 'Bebas Neue, cursive',
            fontSize: '2.5rem',
            color: 'var(--accent-red)',
            marginBottom: '2rem'
          }}>O que nossos clientes dizem</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'stretch'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div style={{
                background: 'linear-gradient(145deg, #1a1a1a, #0f0f0f)',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{
                  color: 'var(--accent-red)',
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem'
                }}>★★★★★</div>
                <p style={{
                  color: 'var(--text-gray)',
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  marginBottom: '0.5rem',
                  fontStyle: 'italic'
                }}>"Trabalho impecável! A tatuagem ficou exatamente como eu imaginava. Profissionalismo e cuidado em cada detalhe."</p>
                <p style={{
                  color: 'var(--text-light)',
                  fontWeight: '500',
                  fontSize: '0.85rem'
                }}>- Maria Silva</p>
              </div>
              
              <div style={{
                background: 'linear-gradient(145deg, #1a1a1a, #0f0f0f)',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{
                  color: 'var(--accent-red)',
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem'
                }}>★★★★★</div>
                <p style={{
                  color: 'var(--text-gray)',
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  marginBottom: '0.5rem',
                  fontStyle: 'italic'
                }}>"Ambiente limpo, equipamentos esterilizados e um resultado incrível. Recomendo de olhos fechados!"</p>
                <p style={{
                  color: 'var(--text-light)',
                  fontWeight: '500',
                  fontSize: '0.85rem'
                }}>- João Santos</p>
              </div>
              
              <div style={{
                background: 'linear-gradient(145deg, #1a1a1a, #0f0f0f)',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{
                  color: 'var(--accent-red)',
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem'
                }}>★★★★★</div>
                <p style={{
                  color: 'var(--text-gray)',
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  marginBottom: '0.5rem',
                  fontStyle: 'italic'
                }}>"Atendimento excepcional desde a consulta até o pós-cuidado. Minha tatuagem cicatrizou perfeitamente!"</p>
                <p style={{
                  color: 'var(--text-light)',
                  fontWeight: '500',
                  fontSize: '0.85rem'
                }}>- Ana Costa</p>
              </div>
            </div>
            
            <div style={{
              background: 'linear-gradient(145deg, #1a1a1a, #0f0f0f)',
              padding: '2rem',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <h2 style={{
                fontFamily: 'Bebas Neue, cursive',
                fontSize: '2.5rem',
                color: 'var(--accent-red)',
                marginBottom: '1rem'
              }}>Solicite seu Orçamento</h2>
              
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-gray)',
                marginBottom: '3rem',
                lineHeight: '1.6'
              }}>
                Agende uma consulta técnica gratuita com nossa equipe especializada
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Link to="/agendamento" style={{
                  background: 'transparent',
                  color: 'var(--accent-red)',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  border: '1px solid var(--accent-red)',
                  transition: 'all 0.2s ease',
                  width: '200px'
                }} onMouseEnter={(e) => {
                  e.target.style.background = 'var(--accent-red)'
                  e.target.style.color = 'white'
                }} onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.color = 'var(--accent-red)'
                }}>Agendar Consulta</Link>
                
                <Link to="/portfolio" style={{
                  background: 'transparent',
                  color: 'var(--accent-red)',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  border: '1px solid var(--accent-red)',
                  transition: 'all 0.2s ease',
                  width: '200px'
                }} onMouseEnter={(e) => {
                  e.target.style.background = 'var(--accent-red)'
                  e.target.style.color = 'white'
                }} onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.color = 'var(--accent-red)'
                }}>Ver Portfólio</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home