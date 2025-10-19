import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { clienteService } from '../services/inkflowApi'

const Profile = () => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({})
  const navigate = useNavigate()
  
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  
  // Inicializa formData com dados do usuário
  useEffect(() => {
    setFormData({
      fullName: user.nome || '',
      email: user.email || '',
      telefone: user.telefone || ''
    })
  }, [])

  const handleUpdateProfile = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      let clienteId = user.id
      
      // Se não tem ID, busca pelo email
      if (!clienteId) {
        const response = await clienteService.getAll()
        const cliente = response.data.find(c => c.email === user.email)
        if (!cliente) {
          alert('Usuário não encontrado')
          setLoading(false)
          return
        }
        clienteId = cliente.id
      }

      // Usa o método update da API (sem email para evitar conflito)
      const updateData = {
        fullName: formData.fullName,
        telefone: formData.telefone
      }
      await clienteService.update(clienteId, updateData)
      
      // Atualiza localStorage com novos dados
      const updatedUser = {
        ...user,
        nome: formData.fullName,
        email: formData.email,
        telefone: formData.telefone
      }
      localStorage.setItem('user', JSON.stringify(updatedUser))
      
      alert('Perfil atualizado com sucesso!')
      setEditing(false)
    } catch (error) {
      console.error('Erro ao atualizar:', error)
      alert(`Erro: ${error.response?.data?.message || 'Falha ao atualizar'}`)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteAccount = async () => {
    setLoading(true)
    try {
      let clienteId = user.id
      
      // Se não tem ID, busca pelo email
      if (!clienteId) {
        const response = await clienteService.getAll()
        const cliente = response.data.find(c => c.email === user.email)
        if (!cliente) {
          alert('Usuário não encontrado')
          setLoading(false)
          return
        }
        clienteId = cliente.id
      }

      await clienteService.delete(clienteId)
      localStorage.clear()
      alert('Conta deletada com sucesso!')
      window.location.href = '/'
    } catch (error) {
      console.error('Erro completo:', error)
      console.error('Response:', error.response)
      console.error('Status:', error.response?.status)
      console.error('Data:', error.response?.data)
      alert(`Erro: ${error.response?.status} - ${error.response?.data?.message || error.message || 'Falha ao deletar'}`)
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
          
          {!editing ? (
            <div className="profile-info" style={{ marginBottom: '2rem' }}>
              <p><strong>Nome:</strong> {user.nome}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Telefone:</strong> {user.telefone || 'Não informado'}</p>
              
              <button 
                onClick={() => setEditing(true)}
                className="btn"
                style={{ 
                  backgroundColor: 'var(--accent-color)',
                  marginTop: '1rem'
                }}
              >
                Editar Perfil
              </button>
            </div>
          ) : (
            <form onSubmit={handleUpdateProfile} style={{ marginBottom: '2rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Nome:</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--text-secondary)',
                    borderRadius: '4px',
                    backgroundColor: 'var(--bg-color)',
                    color: 'var(--text-color)'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</label>
                <input
                  type="email"
                  value={formData.email}
                  disabled
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--text-secondary)',
                    borderRadius: '4px',
                    backgroundColor: '#f5f5f5',
                    color: '#666',
                    cursor: 'not-allowed'
                  }}
                />
                <small style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Email não pode ser alterado</small>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Telefone:</label>
                <input
                  type="tel"
                  value={formData.telefone}
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--text-secondary)',
                    borderRadius: '4px',
                    backgroundColor: 'var(--bg-color)',
                    color: 'var(--text-color)'
                  }}
                />
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button 
                  type="submit"
                  disabled={loading}
                  className="btn"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                >
                  {loading ? 'Salvando...' : 'Salvar'}
                </button>
                <button 
                  type="button"
                  onClick={() => {
                    setEditing(false)
                    setFormData({
                      fullName: user.nome || '',
                      email: user.email || '',
                      telefone: user.telefone || ''
                    })
                  }}
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
            </form>
          )}

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