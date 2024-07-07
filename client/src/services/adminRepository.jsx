import api from './base/api'

const adminRepository = {
    getAllAdmins: async () => {
        try {
          const response = await api.get('/admin');
          return response.data;
        } catch (error) {
          console.error('Erro ao buscar administradores:', error);
          throw error;
        }
      },

      createAdmin: async () => {
        try {
          const response = await api.get(`/admin`);
          return response.data;
        } catch (error) {
          console.error(`Erro ao criar administrador:`, error);
          throw error;
        }
      },

      getAdminById: async (id) => {
        try {
          const response = await api.get(`/admin/${id}`);
          return response.data;
        } catch (error) {
          console.error(`Erro ao buscar administrador com ID ${id}:`, error);
          throw error;
        }
      },

      updateAdmin: async (id) => {
        try {
          const response = await api.get(`/admin/${id}`);
          return response.data;
        } catch (error) {
          console.error(`Erro ao atualizar administrador:`, error);
          throw error;
        }
      },

      deleteAdmin: async (id) => {
        try {
          const response = await api.get(`/admin/${id}`);
          return response.data;
        } catch (error) {
          console.error(`Erro ao deletarr administrador:`, error);
          throw error;
        }
      }
}