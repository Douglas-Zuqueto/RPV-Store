const ProdutoModel = require('../models/produtoModel.js')

exports.getAllProdutos = async (req, res) => {
  try {
    const produtos = await ProdutoModel.readList();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProduto = async (req, res) => {
  try {
    console.log("cheguei no controller")
    console.log(req)
    const newProduto = {
      name: req.body.nome,
      preco: req.body.preco,
      descricao_detalhada: req.body.descricao_detalhada,
      imagem: req.body.imagem,
      qnt_estoque: req.body.qnt_estoque,
      categoria_id: req.body.categoria_id,
    }
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
