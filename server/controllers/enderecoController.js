const EnderecoModel = require('../models/enderecoModel');

exports.getAllEnderecos = async (req, res) => {
  try {
    const enderecos = await EnderecoModel.readList();
    res.status(200).json(enderecos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEnderecoById = async (req, res) => {
  try {
    const endereco = await EnderecoModel.read(req.params.id);
    res.status(200).json(endereco);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createEndereco = async (req, res) => {
  try {
    const newEndereco = req.body;
    await EnderecoModel.create(newEndereco);
    res.status(201).json({ message: "Endereco criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateEndereco = async (req, res) => {
  try {
    const updatedEndereco= req.body;
    await EnderecoModel.update(updatedEndereco, req.params.id);
    res.status(200).json({ message: "Endereco atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteEndereco = async (req, res) => {
  try {
    await EnderecoModel.delete(req.params.id);
    res.status(200).json({ message: "Endereco deletado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
