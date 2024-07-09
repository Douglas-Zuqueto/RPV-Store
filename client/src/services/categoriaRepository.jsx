import api from "./base/api";

const categoriasRepository = {
  createCategorias: async (data) => {
    console.log(data);
    try {
      const response = await api.post(`/categorias`, data);
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      console.error(`Erro ao criar categorias:`, error);
      throw error;
    }
  },

  getCategoriasAll: async () => {
    try {
      const response = await api.get("http://localhost:3000/categorias");
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar categorias `, error)
      throw error;
    }
  },

  getCategoriasByGenero: async (genero) => {
    try {
      if (genero == "M") {
        const response = await api.get("http://localhost:3000/categorias/M");
        return response.data;
      } else if (genero == "F") {
        const response = await api.get("http://localhost:3000/categorias/F");
        return response.data;
      }
    } catch (error) {
      console.error(
        `Erro ao buscar categorias com esse genero:${genero}`,
        error
      );
      throw error;
    }
  },

  updateCategorias: async (id) => {
    try {
      const response = await api.get(`/categorias/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar categorias:`, error);
      throw error;
    }
  },

  deleteCategorias: async (id) => {
    try {
      const response = await api.get(`/categorias/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao deletarr categorias:`, error);
      throw error;
    }
  },
};

export default categoriasRepository;
