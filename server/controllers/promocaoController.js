const PromocaoModel = require('../models/promocaoModel.js')

exports.getAllPromocoes = async (req, res) => {
  try {
    const promocoes = await PromocaoModel.readList();
    res.json(promocoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProduto = async (req, res) => {
  try {
    const newPromocao = req.body;
    const promocao = await PromocaoModel.create(newPromocao);
    res.status(201).json(promocao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPromocaoById = async (req, res) => {
  try {
    const promocao = await PromocaoModel.read(req.params.nome);
    if (promocao) {
      res.json(promocao);
    } else {
      res.status(404).json({ message: 'Promocao não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePromocao = async (req, res) => {
  try {
    const updatedPromocao = req.body;
    const promocao = await PromocaoModel.update(updatedPromocao, req.params.id);
    res.json(promocao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePromocao = async (req, res) => {
  try {
    await PromocaoModel.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
