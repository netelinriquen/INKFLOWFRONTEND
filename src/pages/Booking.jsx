import { useState, useEffect } from 'react'
import { agendamentoService, clienteService } from '../services/inkflowApi'

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    descricao: ''
  })

  const timeSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00']
  const services = ['Tatuagem Tradicional', 'Tatuagem Fine Line', 'Tatuagem Blackwork', 'Tatuagem Aquarela', 'Retoque', 'Consulta']
  
  // Preencher dados do usuário logado
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    if (user.email) {
      setFormData(prev => ({
        ...prev,
        nome: user.nome || '',
        email: user.email || ''
      }))
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      // Primeiro, criar ou buscar cliente
      let clienteId
      const user = JSON.parse(localStorage.getItem('user') || '{}')
      
      if (user.id) {
        clienteId = user.id
      } else {
        // Criar cliente se não existir
        const novoCliente = {
          username: formData.email.split('@')[0],
          email: formData.email,
          password: '123456', // Senha padrão
          fullName: formData.nome
        }
        
        const clienteResponse = await clienteService.create(novoCliente)
        clienteId = clienteResponse.data.id
      }
      
      // Criar agendamento
      const dataHora = `${selectedDate}T${selectedTime}:00`
      const novoAgendamento = {
        cliente: { id: clienteId },
        dataHora: dataHora,
        servico: formData.servico,
        descricao: formData.descricao
      }
      
      await agendamentoService.create(novoAgendamento)
      
      alert('Agendamento realizado com sucesso!')
      setFormData({ nome: '', email: '', telefone: '', servico: '', descricao: '' })
      setSelectedDate('')
      setSelectedTime('')
      
    } catch (error) {
      console.error('Erro ao criar agendamento:', error)
      alert('Erro ao realizar agendamento. Tente novamente.')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="booking">
      <section className="section" style={{ padding: '4rem 2rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, var(--accent-red), #ff6b9d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '3rem',
            fontFamily: 'Orbitron, sans-serif'
          }}>Agendamento</h2>
        
        <div className="agendamento-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }}>
          <div className="form-container" style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '2.5rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            <form onSubmit={handleSubmit}>
              <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className="form-group">
                  <label style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'block', fontWeight: '500' }}>Nome *</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
                
                <div className="form-group">
                  <label style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'block', fontWeight: '500' }}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
                
                <div className="form-group">
                  <label style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'block', fontWeight: '500' }}>Telefone *</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
                
                <div className="form-group">
                  <label style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'block', fontWeight: '500' }}>Serviço *</label>
                  <select
                    name="servico"
                    value={formData.servico}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <option value="" style={{ background: 'var(--primary-dark)', color: 'var(--text-primary)' }}>Selecione um serviço</option>
                    {services.map(service => (
                      <option key={service} value={service} style={{ background: 'var(--primary-dark)', color: 'var(--text-primary)' }}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'block', fontWeight: '500' }}>Data *</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
              
              {selectedDate && (
                <div className="form-group" style={{ marginBottom: '2rem' }}>
                  <label style={{ color: 'var(--text-primary)', marginBottom: '1rem', display: 'block', fontWeight: '500' }}>Horário *</label>
                  <div className="time-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1rem' }}>
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        style={{
                          padding: '1rem',
                          background: selectedTime === time 
                            ? 'linear-gradient(135deg, var(--accent-red), #ff6b9d)'
                            : 'rgba(255, 255, 255, 0.1)',
                          border: selectedTime === time 
                            ? '1px solid var(--accent-red)'
                            : '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '10px',
                          color: 'var(--text-primary)',
                          fontSize: '1rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: selectedTime === time 
                            ? '0 0 20px rgba(255, 0, 64, 0.5)'
                            : 'none'
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'block', fontWeight: '500' }}>Descrição do projeto</label>
                <textarea
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Descreva sua ideia de tatuagem..."
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={!selectedDate || !selectedTime}
                style={{
                  width: '100%',
                  padding: '1.2rem 2rem',
                  background: (!selectedDate || !selectedTime) 
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'linear-gradient(135deg, var(--accent-red), #ff6b9d)',
                  border: 'none',
                  borderRadius: '15px',
                  color: 'var(--text-primary)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: (!selectedDate || !selectedTime) ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: (!selectedDate || !selectedTime) 
                    ? 'none'
                    : '0 0 30px rgba(255, 0, 64, 0.4)',
                  opacity: (!selectedDate || !selectedTime) ? 0.5 : 1
                }}
              >
                Confirmar Agendamento
              </button>
            </form>
          </div>
        </div>
        
          <div className="info-cards" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="info-card" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>
              <h3 style={{ 
                color: 'var(--accent-red)', 
                marginBottom: '1.5rem',
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, sans-serif'
              }}>Políticas de Agendamento</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ color: 'var(--text-secondary)', marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>✓ Agendamentos com 24h de antecedência</li>
                <li style={{ color: 'var(--text-secondary)', marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>✓ Cancelamento até 2h antes</li>
                <li style={{ color: 'var(--text-secondary)', marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>✓ Consulta inicial gratuita</li>
                <li style={{ color: 'var(--text-secondary)', marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>✓ Sinal de 50% para confirmar</li>
              </ul>
            </div>
            
            <div className="info-card" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>
              <h3 style={{ 
                color: 'var(--accent-red)', 
                marginBottom: '1.5rem',
                fontSize: '1.5rem',
                fontFamily: 'Orbitron, sans-serif'
              }}>Horários de Funcionamento</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ color: 'var(--text-secondary)', marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>🕘 Segunda a Sexta: 9h às 18h</li>
                <li style={{ color: 'var(--text-secondary)', marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>🕘 Sábado: 9h às 16h</li>
                <li style={{ color: 'var(--text-secondary)', marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>❌ Domingo: Fechado</li>
                <li style={{ color: 'var(--text-secondary)', marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>📞 Feriados: Consultar</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Booking