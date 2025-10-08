import { useState } from 'react'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Olá! Como posso ajudar você hoje?' }
  ])
  const [inputValue, setInputValue] = useState('')

  const quickReplies = [
    'Quero agendar',
    'Ver preços',
    'Estilos disponíveis',
    'Localização'
  ]

  const botResponses = {
    'quero agendar': 'Ótimo! Você pode agendar através da nossa página de agendamento. Precisa de alguma informação específica?',
    'ver preços': 'Nossos preços variam de R$ 150 a R$ 400 dependendo do estilo e tamanho. Quer saber sobre algum estilo específico?',
    'estilos disponíveis': 'Trabalhamos com: Blackwork, Aquarela, Realismo, Geométrico, Fine Line e Tradicional. Qual te interessa?',
    'localização': 'Estamos localizados em São Paulo, SP. Entre em contato para o endereço exato!'
  }

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage = { type: 'user', text: inputValue }
    const botResponse = getBotResponse(inputValue.toLowerCase())

    setMessages(prev => [...prev, userMessage, { type: 'bot', text: botResponse }])
    setInputValue('')
  }

  const handleQuickReply = (reply) => {
    const userMessage = { type: 'user', text: reply }
    const botResponse = getBotResponse(reply.toLowerCase())

    setMessages(prev => [...prev, userMessage, { type: 'bot', text: botResponse }])
  }

  const getBotResponse = (input) => {
    for (const [key, response] of Object.entries(botResponses)) {
      if (input.includes(key)) {
        return response
      }
    }
    return 'Obrigado pela mensagem! Nossa equipe entrará em contato em breve. Você também pode nos chamar no WhatsApp!'
  }

  return (
    <div className="chatbot-container">
      <div className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
        💬
      </div>

      {isOpen && (
        <div className="chatbot-window" style={{ display: 'flex' }}>
          <div className="chatbot-header">
            <h3>Ink Flow - Atendimento</h3>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}-message`}>
                {message.text}
              </div>
            ))}
            
            <div className="quick-buttons">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  className="quick-btn"
                  onClick={() => handleQuickReply(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Digite sua mensagem..."
            />
            <button onClick={handleSend}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chatbot