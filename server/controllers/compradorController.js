const CompradorModel = require('../models/compradorModel.js'); // Importa o modelo CompradorModel, responsável pela interação com os dados dos compradores

// Obtém todos os compradores
exports.getAllCompradores = async (req, res) => {
  try {
    const compradores = await CompradorModel.readList(); // Chama a função readList do CompradorModel para obter todos os compradores
    res.status(200).json(compradores); // Retorna os compradores em formato JSON com o código de status 200 (OK)
  } catch (error) {
    res.status(500).json({ error: error.message }); // Retorna um erro 500 caso ocorra um erro no servidor
  }
};

// Obtém um comprador pelo ID
exports.getCompradorById = async (req, res) => {
  try {
    const comprador = await CompradorModel.read(req.params.id); // Chama a função read do CompradorModel para obter um comprador pelo ID
    if (comprador) {
      res.status(200).json(comprador); // Retorna o comprador encontrado em formato JSON com o código de status 200 (OK)
    } else {
      res.status(404).json({ message: 'Comprador não encontrado' }); // Retorna um erro 404 se o comprador não for encontrado
    }
  } catch (error) {
    res.status(500).json({ error: error.message }); // Retorna um erro 500 caso ocorra um erro no servidor
  }
};

// Cria um novo comprador
exports.createComprador = async (req, res) => {
  try {
    const newComprador = req.body; // Obtém os dados do novo comprador do corpo da requisição
    await CompradorModel.create(newComprador); // Chama a função create do CompradorModel para criar um novo comprador
    res.status(201).json({ message: "Comprador criado com sucesso!" }); // Retorna uma mensagem de sucesso com o código de status 201 (Created)
  } catch (error) {
    res.status(500).json({ error: error.message }); // Retorna um erro 500 caso ocorra um erro no servidor
  }
};

// Atualiza um comprador pelo ID
exports.updateComprador = async (req, res) => {
  try {
    const updatedComprador = req.body; // Obtém os dados atualizados do comprador do corpo da requisição
    await CompradorModel.update(updatedComprador, req.params.id); // Chama a função update do CompradorModel para atualizar um comprador pelo ID
    res.status(200).json({ message: "Comprador atualizado com sucesso!" }); // Retorna uma mensagem de sucesso com o código de status 200 (OK)
  } catch (error) {
    res.status(500).json({ error: error.message }); // Retorna um erro 500 caso ocorra um erro no servidor
  }
};

// Deleta um comprador pelo ID
exports.deleteComprador = async (req, res) => {
  try {
    await CompradorModel.delete(req.params.id); // Chama a função delete do CompradorModel para deletar um comprador pelo ID
    res.status(200).json({ message: "Comprador deletado com sucesso!" }); // Retorna uma mensagem de sucesso com o código de status 200 (OK)
  } catch (error) {
    res.status(500).json({ error: error.message }); // Retorna um erro 500 caso ocorra um erro no servidor
  }
};
