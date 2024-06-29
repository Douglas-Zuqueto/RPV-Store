const CarrinhoModel = require('../models/carrinhoModel');

exports.getAllCarrinhos = async (req, res) => {
  try {
    const carrinhos = await CarrinhoModel.readList();
    res.json(carrinhos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCarrinho = async (req, res) => {
  try {
    const newCarrinho = req.body;
    const carrinho = await CarrinhoModel.create(newCarrinho);
    res.status(201).json(carrinho);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCarrinhoById = async (req, res) => {
  try {
    const carrinho = await CarrinhoModel.read(req.params.id);
    if (carrinho) {
      res.json(carrinho);
    } else {
      res.status(404).json({ message: 'Carrinho não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCarrinho = async (req, res) => {
  try {
    const updatedCarrinho = req.body;
    const carrinho = await CarrinhoModel.update(updatedCarrinho, req.params.id);
    res.json(carrinho);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCarrinho = async (req, res) => {
  try {
    await CarrinhoModel.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
