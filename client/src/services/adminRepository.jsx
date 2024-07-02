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
}