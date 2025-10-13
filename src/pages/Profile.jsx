import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clienteService } from '../services/inkflowApi'

const Profile = () => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  const handleDeleteAccount = async () => {
    if (!user.id) {
      alert('Erro: usuário não encontrado')
      return
    }

    setLoading(true)
    try {
      await clienteService.delete(user.id)
      localStorage.removeItem('user')
      alert('Conta deletada com sucesso!')
      navigate('/')
    } catch (error) {
      console.error('Erro ao deletar conta:', error)
      alert('Erro ao deletar conta. Tente novamente.')
    } finally {
      setLoading(false)
      setShowDeleteConfirm(false)
    }
  }

  if (!user.email) {
    return (
      <div className="section">
        <div className="container">
          <h2>Acesso negado</h2>
          <p>Faça login para acessar seu perfil.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="profile">
      <section className="section">
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2>Meu Perfil</h2>
          
          <div className="profile-info" style={{ marginBottom: '2rem' }}>
            <p><strong>Nome:</strong> {user.nome}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>

          <div className="danger-zone" style={{ 
            border: '1px solid var(--accent-red)', 
            borderRadius: '8px', 
            padding: '1.5rem',
            backgroundColor: 'rgba(255, 0, 64, 0.1)'
          }}>
            <h3 style={{ color: 'var(--accent-red)', marginBottom: '1rem' }}>
              Zona de Perigo
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Esta ação é irreversível. Todos os seus dados e agendamentos serão perdidos.
            </p>
            
            {!showDeleteConfirm ? (
              <button 
                onClick={() => setShowDeleteConfirm(true)}
                className="btn"
                style={{ 
                  backgroundColor: 'var(--accent-red)',
                  border: '1px solid var(--accent-red)'
                }}
              >
                Deletar Conta
              </button>
            ) : (
              <div>
                <p style={{ color: 'var(--accent-red)', marginBottom: '1rem' }}>
                  Tem certeza que deseja deletar sua conta?
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button 
                    onClick={handleDeleteAccount}
                    disabled={loading}
                    className="btn"
                    style={{ 
                      backgroundColor: 'var(--accent-red)',
                      border: '1px solid var(--accent-red)'
                    }}
                  >
                    {loading ? 'Deletando...' : 'Sim, Deletar'}
                  </button>
                  <button 
                    onClick={() => setShowDeleteConfirm(false)}
                    className="btn"
                    style={{ 
                      backgroundColor: 'transparent',
                      border: '1px solid var(--text-secondary)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile