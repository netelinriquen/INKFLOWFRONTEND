import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 segundos timeout
});

// Interceptor para logs de debug
api.interceptors.request.use(
  (config) => {
    console.log('🚀 Enviando requisição:', {
      url: config.url,
      method: config.method,
      data: config.data,
      baseURL: config.baseURL
    });
    return config;
  },
  (error) => {
    console.error('❌ Erro na requisição:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log('✅ Resposta recebida:', response.data);
    return response;
  },
  (error) => {
    console.error('❌ Erro na resposta:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    return Promise.reject(error);
  }
);

// Serviços de Cliente
export const clienteService = {
  // Listar todos os clientes
  getAll: () => api.get('/clientes'),
  
  // Buscar cliente por ID
  getById: (id) => api.get(`/clientes/${id}`),
  
  // Criar novo cliente com validação
  create: (cliente) => {
    // Validação básica dos dados
    const dadosValidados = {
      username: cliente.username || cliente.email?.split('@')[0] || '',
      email: cliente.email || '',
      password: cliente.password || '',
      fullName: cliente.fullName || cliente.nome || '',
      phone: cliente.phone || cliente.telefone || ''
    };
    
    console.log('📝 Dados do cliente validados:', dadosValidados);
    return api.post('/clientes', dadosValidados);
  },
  
  // Atualizar cliente
  update: (id, cliente) => api.put(`/clientes/${id}`, cliente),
  
  // Deletar cliente
  delete: (id) => api.delete(`/clientes/${id}`)
};

// Serviços de Agendamento
export const agendamentoService = {
  // Listar todos os agendamentos
  getAll: () => api.get('/agendamentos'),
  
  // Buscar agendamento por ID
  getById: (id) => api.get(`/agendamentos/${id}`),
  
  // Buscar por status
  getByStatus: (status) => api.get(`/agendamentos/status/${status}`),
  
  // Criar novo agendamento
  create: (agendamento) => api.post('/agendamentos', agendamento),
  
  // Atualizar agendamento
  update: (id, agendamento) => api.put(`/agendamentos/${id}`, agendamento),
  
  // Deletar agendamento
  delete: (id) => api.delete(`/agendamentos/${id}`)
};

// Teste de conexão
export const testConnection = () => {
  console.log('🔍 Testando conexão com:', API_BASE_URL);
  return api.get('/test');
};

// Função para testar se o backend está online
export const checkBackendHealth = async () => {
  try {
    const response = await axios.get(API_BASE_URL.replace('/api', '/health'), { timeout: 5000 });
    return { online: true, data: response.data };
  } catch (error) {
    return { online: false, error: error.message };
  }
};

export { API_BASE_URL };
export default api;