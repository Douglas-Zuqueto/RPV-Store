const AdminModel = require('../models/adminModel.js'); // Importa o modelo AdminModel, responsável pela interação com os dados dos administradores

// Obtém todos os administradores
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await AdminModel.readList(); // Chama a função readList do AdminModel para obter a lista de administradores
    res.json(admins); // Retorna os administradores em formato JSON
  } catch (error) {
    res.status(500).json({ error: error.message    
      
    }); // Retorna um erro 500 caso ocorra um erro no servidor
  }
};

// Cria um novo administrador
exports.createAdmin = async (req, res) => {
  try {
    const newAdmin = req.body; // Obtém os dados do novo administrador do corpo da requisição
    const admin = await AdminModel.create(newAdmin); // Chama a função create do AdminModel para criar um novo administrador
    res.status(201).json(admin); // Retorna o administrador criado com o código de status 201 (Created)
  } catch (error) {
    res.status(500).json({ error: error.message }); // Retorna um erro 500 caso ocorra um erro no servidor
  }
};

// Obtém um administrador pelo ID
exports.getAdminById = async (req, res) => {
  try {
    const admin = await AdminModel.read(req.params.id); // Chama a função read do AdminModel para obter um administrador específico pelo ID
    if (admin) {
      res.json(admin); // Retorna o administrador em formato JSON se encontrado
    } else {
      res.status(404).json({ message: 'Admin não encontrado' }); // Retorna um erro 404 se o administrador não for encontrado
    }
  } catch (error) {
    res.status(500).json({ error: error.message }); // Retorna um erro 500 caso ocorra um erro no servidor
  }
};

// Atualiza um administrador pelo ID
exports.updateAdmin = async (req, res) => {
  try {
    const updatedAdmin = req.body; // Obtém os dados atualizados do administrador do corpo da requisição
    const admin = await AdminModel.update(updatedAdmin, req.params.id); // Chama a função update do AdminModel para atualizar um administrador pelo ID
    res.json(admin); // Retorna o administrador atualizado em formato JSON
  } catch (error) {
    res.status(500).json({ error: error.message }); // Retorna um erro 500 caso ocorra um erro no servidor
  }
};

// Deleta um administrador pelo ID
exports.deleteAdmin = async (req, res) => {
  try {
    await AdminModel.delete(req.params.id); // Chama a função delete do AdminModel para deletar um administrador pelo ID
    res.status(204).send(); // Retorna o código de status 204 (No Content) indicando que a operação foi realizada com sucesso
  } catch (error) {
    res.status(500).json({ error: error.message }); // Retorna um erro 500 caso ocorra um erro no servidor
  }
};
