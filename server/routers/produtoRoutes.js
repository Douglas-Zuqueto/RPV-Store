const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

console.log("cheguei no router")
router.get('/produtos', produtoController.getAllProdutos);
router.post('/historico', produtoController.createProduto);
router.get('/produtos/:nome', produtoController.getProdutoByName);
router.put('/produtos/:id', produtoController.updateProduto);
router.delete('/produtos/:id', produtoController.deleteProduto);

module.exports = router;