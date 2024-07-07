const ProdutoModel = require('../models/produtoModel.js')

exports.getAllProdutos = async (req, res) => {
  try {
    const produtos = await ProdutoModel.readList();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

 exports.createProduto = async (req, res) => {
  try {
    console.log(req);
    const newProduto =req.body
    console.log(newProduto)
    const produto = await ProdutoModel.create(newProduto);
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.getProdutoByName = async (req, res) => {
  try {
    const produto = await ProdutoModel.read(req.params.nome);
    if (produto) {
      res.json(produto);
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProduto = async (req, res) => {
  try {
    const updatedProduto = req.body;
    const produto = await ProdutoModel.update(updatedProduto, req.params.id);
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProduto = async (req, res) => {
  try {
    await ProdutoModel.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};