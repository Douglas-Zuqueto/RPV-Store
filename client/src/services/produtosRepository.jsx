import api from './base/api'

const produtosRepository = {
    getAllProdutos: async () => {
        try {
          const response = await api.get('http://localhost:3000/produtos');
          console.log(response.data)
          return response.data;
        } catch (error) {
          console.error('Erro ao buscar produtos:', error);
          throw error;
        }
      },

      createProdutos: async (data) => {
        try {
          const response = await api.post('http://localhost:3000/historico',  data);
          console.log("response.data", response.data);
          return response.data;
        } catch (error) {
          console.error(`Erro ao criar produtos:`, error);
          throw error;
        }
      },

      getProdutosByName: async (nome) => {
        try {
          const response = await api.get(`/produtos/${nome}`);
          return response.data;
        } catch (error) {
          console.error(`Erro ao buscar produtos com ID ${nome}:`, error);
          throw error;
        }
      },

      updateProdutos: async (id) => {
        try {
          const response = await api.get(`/produtos/${id}`);
          return response.data;
        } catch (error) {
          console.error(`Erro ao atualizar produtos:`, error);
          throw error;
        }
      },

      deleteProdutos: async (id) => {
        try {
          const response = await api.get(`/produtos/${id}`);
          return response.data;
        } catch (error) {
          console.error(`Erro ao deletarr produtos:`, error);
          throw error;
        }
      }
}

export default produtosRepository