import api from './base/api'


const CompradorRepository = {
    getAllCompradores: async () => {
        try {
          const response = await api.get('http://localhost:3000/Login');
          return response.data;
        } catch (error) {
          console.error('Erro ao buscar Compradores:', error);
          throw error;
        }
      },

      createComprador: async () => {
        try {
          const response = await api.get(`http://localhost:3000/Registrar`);
          return response.data;
        } catch (error) {
          console.error(`Erro ao criar Compradores:`, error);
          throw error;
        }
      },

      getCompradorById: async (id) => {
        try {
          const response = await api.get(`/Comprador/${id}`);
          return response.data;
        } catch (error) {
          console.error(`Erro ao buscar Compradores com ID ${id}:`, error);
          throw error;
        }
      },

      updateComprador: async (id) => {
        try {
          const response = await api.get(`/Comprador/${id}`);
          return response.data;
        } catch (error) {
          console.error(`Erro ao atualizar Compradores:`, error);
          throw error;
        }
      },

      deleteComprador: async (id) => {
        try {
          const response = await api.get(`/Comprador/${id}`);
          return response.data;
        } catch (error) {
          console.error(`Erro ao deletarr Compradores:`, error);
          throw error;
        }
      }
}

export default CompradorRepository