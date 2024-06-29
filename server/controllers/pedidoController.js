const PedidoModel = require('../models/pedidoModel');

exports.getAllPedidos = async (req, res) => {
  try {
    const pedidos = await PedidoModel.readList();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPedidoById = async (req, res) => {
  try {
    const pedido = await PedidoModel.read(req.params.id);
    res.status(200).json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPedido = async (req, res) => {
  try {
    const newPedido = req.body;
    await PedidoModel.create(newPedido);
    res.status(201).json({ message: "Pedido criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePedido = async (req, res) => {
  try {
    const updatedPedido = req.body;
    await PedidoModel.update(updatedPedido, req.params.id);
    res.status(200).json({ message: "Pedido atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePedido = async (req, res) => {
  try {
    await PedidoModel.delete(req.params.id);
    res.status(200).json({ message: "Pedido deletado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
