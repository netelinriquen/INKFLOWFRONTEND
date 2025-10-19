import { useState, useEffect } from 'react'
import Calendar from '../components/Calendar'
import { agendamentoService, clienteService } from '../services/inkflowApi'

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null)
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
  
  // Simulando disponibilidade de horários
  const getAvailableSlots = () => {
    const slots = {}
    const today = new Date()
    
    // Próximos 30 dias
    for (let i = 0; i < 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      const dateStr = date.toISOString().split('T')[0]
      
      // Simular alguns dias com horários disponíveis
      if (date.getDay() !== 0) { // Não domingo
        const availableHours = timeSlots.filter(() => Math.random() > 0.3)
        if (availableHours.length > 0) {
          slots[dateStr] = availableHours
        }
      }
    }
    return slots
  }
  
  const availableSlots = getAvailableSlots()
  
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
      setSelectedDate(null)
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
      <section className="section" style={{ paddingTop: '8rem' }}>
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
                <Calendar 
                  selectedDate={selectedDate}
                  onDateSelect={setSelectedDate}
                  availableSlots={availableSlots}
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