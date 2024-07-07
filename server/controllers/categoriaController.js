const CategoriaModel = require('../models/categoriaModel.js')

exports.createCategoria = async (req, res) => {
  try {
    const newCategoria = req.body;
    const categoria = await CategoriaModel.create(newCategoria);
    res.status(201).json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCategoriasByGenero = async (req, res) => {
  try {
    console.log(req)
    const categoria = await CategoriaModel.read(req.body);
    if (categoria) {
      res.json(categoria);
    } else {
      res.status(404).json({ message: 'Categoria não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCategoria = async (req, res) => {
  try {
    const updatedCategoria = req.body;
    const categoria = await CategoriaModel.update(updatedCategoria, req.params.id);
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCategoria = async (req, res) => {
  try {
    await CategoriaModel.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
