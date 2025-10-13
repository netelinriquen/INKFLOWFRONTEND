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
      <div 
        className="chatbot-button glow-red pulse magnetic" 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'var(--gradient-red)',
          border: 'none',
          fontSize: '1.5rem'
        }}
      >
        💬
      </div>

      {isOpen && (
        <div className="chatbot-window glass-card neon-border scale-in" style={{ 
          display: 'flex',
          background: 'var(--gradient-card)',
          backdropFilter: 'blur(20px)'
        }}>
          <div className="chatbot-header" style={{
            background: 'var(--gradient-red)'
          }}>
            <h3>🎨 Ink Flow - Atendimento</h3>
            <button 
              className="chatbot-close magnetic" 
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '35px',
                height: '35px'
              }}
            >
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.type}-message fade-in-up`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {message.text}
              </div>
            ))}
            
            <div className="quick-buttons">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  className="quick-btn magnetic ripple"
                  onClick={() => handleQuickReply(reply)}
                  style={{
                    background: 'var(--gradient-red)',
                    border: 'none',
                    borderRadius: 'var(--border-radius-md)'
                  }}
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
              style={{
                background: 'var(--gradient-card)',
                border: '1px solid rgba(255, 0, 64, 0.3)',
                borderRadius: 'var(--border-radius-lg)'
              }}
            />
            <button 
              onClick={handleSend}
              className="magnetic ripple"
              style={{
                background: 'var(--gradient-red)',
                border: 'none',
                borderRadius: 'var(--border-radius-lg)'
              }}
            >
              🚀
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chatbot