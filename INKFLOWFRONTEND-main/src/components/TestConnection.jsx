import { useState, useEffect } from 'react';
import { testConnection, clienteService, agendamentoService, checkBackendHealth, API_BASE_URL } from '../services/inkflowApi';

function TestConnection() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [backendStatus, setBackendStatus] = useState(null);

  useEffect(() => {
    checkHealth();
  }, []);

  const checkHealth = async () => {
    const health = await checkBackendHealth();
    setBackendStatus(health);
  };

  const handleTest = async () => {
    setLoading(true);
    try {
      const response = await testConnection();
      setResult(`✅ Conexão OK: ${JSON.stringify(response.data)}`);
    } catch (error) {
      setResult(`❌ Erro: ${error.message} | Status: ${error.response?.status}`);
    }
    setLoading(false);
  };

  const handleTestClientes = async () => {
    setLoading(true);
    try {
      const response = await clienteService.getAll();
      setResult(`✅ Clientes: ${response.data.length} encontrados`);
    } catch (error) {
      setResult(`❌ Erro clientes: ${error.message} | Status: ${error.response?.status}`);
    }
    setLoading(false);
  };

  const handleTestCadastro = async () => {
    setLoading(true);
    try {
      const testUser = {
        username: 'teste123',
        email: 'teste@teste.com',
        password: '123456',
        fullName: 'Usuario Teste',
        phone: '11999999999'
      };
      
      const response = await clienteService.create(testUser);
      setResult(`✅ Cadastro teste OK: ${JSON.stringify(response.data)}`);
    } catch (error) {
      setResult(`❌ Erro cadastro: ${error.message} | Status: ${error.response?.status} | Data: ${JSON.stringify(error.response?.data)}`);
    }
    setLoading(false);
  };

  const handleTestAgendamentos = async () => {
    setLoading(true);
    try {
      const response = await agendamentoService.getAll();
      setResult(`✅ Agendamentos: ${response.data.length} encontrados`);
    } catch (error) {
      setResult(`❌ Erro agendamentos: ${error.message} | Status: ${error.response?.status}`);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', backgroundColor: '#f5f5f5' }}>
      <h3>🔧 Diagnóstico do Backend</h3>
      
      <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: backendStatus?.online ? '#d4edda' : '#f8d7da', borderRadius: '5px' }}>
        <strong>Status do Backend:</strong> 
        {backendStatus ? (
          backendStatus.online ? 
            `✅ Online - ${API_BASE_URL}` : 
            `❌ Offline - ${backendStatus.error}`
        ) : '🔄 Verificando...'}
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <button onClick={handleTest} disabled={loading} style={{ margin: '5px' }}>
          Testar Conexão API
        </button>
        <button onClick={handleTestClientes} disabled={loading} style={{ margin: '5px' }}>
          Listar Clientes
        </button>
        <button onClick={handleTestCadastro} disabled={loading} style={{ margin: '5px' }}>
          Testar Cadastro
        </button>
        <button onClick={handleTestAgendamentos} disabled={loading} style={{ margin: '5px' }}>
          Testar Agendamentos
        </button>
        <button onClick={checkHealth} disabled={loading} style={{ margin: '5px' }}>
          Verificar Health
        </button>
      </div>

      {loading && <p>🔄 Carregando...</p>}
      {result && (
        <div style={{ 
          padding: '10px', 
          backgroundColor: result.includes('✅') ? '#d1ecf1' : '#f8d7da', 
          borderRadius: '5px',
          fontFamily: 'monospace',
          fontSize: '12px',
          wordBreak: 'break-all'
        }}>
          {result}
        </div>
      )}
    </div>
  );
}

export default TestConnection;