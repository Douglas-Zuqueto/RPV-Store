import api from './base/api'; // Importa o objeto 'api' de um arquivo específico que contém métodos para fazer requisições HTTP

const CompradorRepository = {
  // Objeto CompradorRepository que contém métodos para interagir com endpoints relacionados a compradores

  getAllCompradores: async () => {
    // Método para buscar todos os compradores
    try {
      const response = await api.get('http://localhost:3000/Login'); // Faz uma requisição GET para o endpoint 'http://localhost:3000/Login' utilizando o objeto 'api'
      return response.data; // Retorna os dados recebidos da resposta da API
    } catch (error) {
      console.error('Erro ao buscar Compradores:', error); // Se ocorrer um erro, registra o erro no console
      throw error; // Lança o erro para ser tratado pelo código que chama este método
    }
  },

  createComprador: async (data) => {
    // Método para criar um novo comprador
    try {
      const response = await api.post('http://localhost:3000/Registrar', data); // Faz uma requisição POST para o endpoint 'http://localhost:3000/Registrar' utilizando o objeto 'api' e enviando os dados recebidos
      return response.data; // Retorna os dados recebidos da resposta da API
    } catch (error) {
      console.error(`Erro ao criar Compradores:`, error); // Se ocorrer um erro, registra o erro no console
      throw error; // Lança o erro para ser tratado pelo código que chama este método
    }
  },

  getCompradorById: async (id) => {
    // Método para buscar um comprador por ID
    try {
      const response = await api.get(`/Comprador/${id}`); // Faz uma requisição GET para o endpoint '/Comprador/${id}' utilizando o objeto 'api'
      return response.data; // Retorna os dados recebidos da resposta da API
    } catch (error) {
      console.error(`Erro ao buscar Compradores com ID ${id}:`, error); // Se ocorrer um erro, registra o erro no console
      throw error; // Lança o erro para ser tratado pelo código que chama este método
    }
  },

  updateComprador: async (id) => {
    // Método para atualizar um comprador por ID
    try {
      const response = await api.get(`/Comprador/${id}`); // Faz uma requisição GET para o endpoint '/Comprador/${id}' utilizando o objeto 'api'
      return response.data; // Retorna os dados recebidos da resposta da API
    } catch (error) {
      console.error(`Erro ao atualizar Compradores:`, error); // Se ocorrer um erro, registra o erro no console
      throw error; // Lança o erro para ser tratado pelo código que chama este método
    }
  },

  deleteComprador: async (id) => {
    // Método para deletar um comprador por ID
    try {
      const response = await api.get(`/Comprador/${id}`); // Faz uma requisição GET para o endpoint '/Comprador/${id}' utilizando o objeto 'api'
      return response.data; // Retorna os dados recebidos da resposta da API
    } catch (error) {
      console.error(`Erro ao deletar Compradores:`, error); // Se ocorrer um erro, registra o erro no console
      throw error; // Lança o erro para ser tratado pelo código que chama este método
    }
  },
};

export default CompradorRepository;
