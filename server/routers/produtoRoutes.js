const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

console.log("cheguei no router")
router.get('/historico', produtoController.getAllProdutos);
router.post('/historico', produtoController.createProduto);
router.get('/historico', produtoController.getProdutoByName);
router.put('/historico/:id', produtoController.updateProduto);
router.delete('/historico/:id', produtoController.deleteProduto);

module.exports = router;