const MensagemModel = require('../models/mensagemModel.js')

exports.getAllMensagens = async (req, res) => {
  try {
    const mensagens = await MensagemModel.readList();
    res.status(200).json(mensagens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMensagemById = async (req, res) => {
  try {
    const mensagem = await MensagemModel.read(req.params.id);
    res.status(200).json(mensagem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMensagem = async (req, res) => {
  try {
    const newMensagem = req.body;
    await MensagemModel.create(newMensagem);
    res.status(201).json({ message: "Mensagem criada com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateMensagem = async (req, res) => {
  try {
    const updatedMensagem = req.body;
    await MensagemModel.update(updatedMensagem, req.params.id);
    res.status(200).json({ message: "Mensagem atualizada com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteMensagem = async (req, res) => {
  try {
    await MensagemModel.delete(req.params.id);
    res.status(200).json({ message: "Mensagem deletada com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
