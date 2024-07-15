import api from './base/api'; // Importa o objeto 'api' de um arquivo específico que contém métodos para fazer requisições HTTP

const adminRepository = {
  // Objeto adminRepository que contém métodos para interagir com endpoints relacionados a administradores

  getAllAdmins: async () => {
    // Método para buscar todos os administradores
    try {
      const response = await api.get('/admin'); // Faz uma requisição GET para o endpoint '/admin' utilizando o objeto 'api'
      return response.data; // Retorna os dados recebidos da resposta da API
    } catch (error) {
      console.error('Erro ao buscar administradores:', error); // Se ocorrer um erro, registra o erro no console
      throw error; // Lança o erro para ser tratado pelo código que chama este método
    }
  },

  createAdmin: async () => {
    // Método para criar um novo administrador
    try {
      const response = await api.get(`/admin`); // Faz uma requisição GET para o endpoint '/admin' utilizando o objeto 'api'
      return response.data; // Retorna os dados recebidos da resposta da API
    } catch (error) {
      console.error(`Erro ao criar administrador:`, error); // Se ocorrer um erro, registra o erro no console
      throw error; // Lança o erro para ser tratado pelo código que chama este método
    }
  },

  getAdminById: async (id) => {
    // Método para buscar um administrador por ID
    try {
      const response = await api.get(`/admin/${id}`); // Faz uma requisição GET para o endpoint '/admin/${id}' utilizando o objeto 'api'
      return response.data; // Retorna os dados recebidos da resposta da API
    } catch (error) {
      console.error(`Erro ao buscar administrador com ID ${id}:`, error); // Se ocorrer um erro, registra o erro no console
      throw error; // Lança o erro para ser tratado pelo código que chama este método
    }
  },

  updateAdmin: async (id) => {
    // Método para atualizar um administrador por ID
    try {
      const response = await api.get(`/admin/${id}`); // Faz uma requisição GET para o endpoint '/admin/${id}' utilizando o objeto 'api'
      return response.data; // Retorna os dados recebidos da resposta da API
    } catch (error) {
      console.error(`Erro ao atualizar administrador:`, error); // Se ocorrer um erro, registra o erro no console
      throw error; // Lança o erro para ser tratado pelo código que chama este método
    }
  },

  deleteAdmin: async (id) => {
    // Método para deletar um administrador por ID
    try {
      const response = await api.get(`/admin/${id}`); // Faz uma requisição GET para o endpoint '/admin/${id}' utilizando o objeto 'api'
      return response.data; // Retorna os dados recebidos da resposta da API
    } catch (error) {
      console.error(`Erro ao deletar administrador:`, error); // Se ocorrer um erro, registra o erro no console
      throw error; // Lança o erro para ser tratado pelo código que chama este método
    }
  },
};

export default adminRepository; 
