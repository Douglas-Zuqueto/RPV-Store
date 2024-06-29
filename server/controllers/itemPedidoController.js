const ItensPedidoModel = require('../models/itensPedidoModel');

exports.getAllItensPedido = async (req, res) => {
  try {
    const itensPedido = await ItensPedidoModel.readList();
    res.status(200).json(itensPedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getItensPedidoById = async (req, res) => {
  try {
    const itemPedido = await ItensPedidoModel.read(req.params.id);
    res.status(200).json(itemPedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createItensPedido = async (req, res) => {
  try {
    const newItemPedido = req.body;
    await ItensPedidoModel.create(newItemPedido);
    res.status(201).json({ message: "Item do pedido criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateItensPedido = async (req, res) => {
  try {
    const updatedItemPedido = req.body;
    await ItensPedidoModel.update(updatedItemPedido, req.params.id);
    res.status(200).json({ message: "Item do pedido atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteItensPedido = async (req, res) => {
  try {
    await ItensPedidoModel.delete(req.params.id);
    res.status(200).json({ message: "Item do pedido deletado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
