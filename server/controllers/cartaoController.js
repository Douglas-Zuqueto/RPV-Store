const CartaoModel = require('../models/cartaoModel.js')

exports.getAllCartoes = async (req, res) => {
  try {
    const cartoes = await CartaoModel.readList();
    res.json(cartoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCartao = async (req, res) => {
  try {
    const newCartao = req.body;
    const cartao = await CartaoModel.create(newCartao);
    res.status(201).json(cartao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCartaoById = async (req, res) => {
  try {
    const cartao = await CartaoModel.read(req.params.id);
    if (cartao) {
      res.json(cartao);
    } else {
      res.status(404).json({ message: 'Cartão não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCartao = async (req, res) => {
  try {
    const updatedCartao = req.body;
    const cartao = await CartaoModel.update(updatedCartao, req.params.id);
    res.json(cartao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCartao = async (req, res) => {
  try {
    await CartaoModel.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
