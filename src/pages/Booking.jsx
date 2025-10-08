import { useState } from 'react'

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
  const services = ['Tatuagem Pequena', 'Tatuagem Média', 'Tatuagem Grande', 'Retoque', 'Consulta']

  const handleSubmit = (e) => {
    e.preventDefault()
    const booking = {
      ...formData,
      data: selectedDate,
      horario: selectedTime,
      id: Date.now()
    }
    
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]')
    bookings.push(booking)
    localStorage.setItem('bookings', JSON.stringify(bookings))
    
    alert('Agendamento realizado com sucesso!')
    setFormData({ nome: '', email: '', telefone: '', servico: '', descricao: '' })
    setSelectedDate('')
    setSelectedTime('')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="booking">
      <section className="section">
        <h2>Agendamento</h2>
        
        <div className="agendamento-grid">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Nome *</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Telefone *</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Serviço *</label>
                  <select
                    name="servico"
                    value={formData.servico}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label>Data *</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              
              {selectedDate && (
                <div className="form-group">
                  <label>Horário *</label>
                  <div className="time-grid">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        type="button"
                        className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="form-group">
                <label>Descrição do projeto</label>
                <textarea
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Descreva sua ideia de tatuagem..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn" disabled={!selectedDate || !selectedTime}>
                Confirmar Agendamento
              </button>
            </form>
          </div>
        </div>
        
        <div className="info-cards">
          <div className="info-card">
            <h3>Políticas de Agendamento</h3>
            <ul>
              <li>Agendamentos com 24h de antecedência</li>
              <li>Cancelamento até 2h antes</li>
              <li>Consulta inicial gratuita</li>
              <li>Sinal de 50% para confirmar</li>
            </ul>
          </div>
          
          <div className="info-card">
            <h3>Horários de Funcionamento</h3>
            <ul>
              <li>Segunda a Sexta: 9h às 18h</li>
              <li>Sábado: 9h às 16h</li>
              <li>Domingo: Fechado</li>
              <li>Feriados: Consultar</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Booking