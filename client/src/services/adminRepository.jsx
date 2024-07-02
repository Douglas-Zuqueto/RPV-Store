import api from './base/api'

const adminRepository = {
    getAllAdmins: async () => {
        try {
          const response = await api.get('/admins');
          return response.data;
        } catch (error) {
          console.error('Erro ao buscar administradores:', error);
          throw error;
        }
      },

      getAdminById: async (id) => {
        try {
          const response = await api.get(`/admins/${id}`);
          return response.data;
        } catch (error) {
          console.error(`Erro ao buscar administrador com ID ${id}:`, error);
          throw error;
        }
      }   
}