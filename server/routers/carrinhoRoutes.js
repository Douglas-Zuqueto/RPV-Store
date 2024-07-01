const express = require('express');
const router = express.Router();
const carrinhoController = require('../controllers/carrinhoController');

router.get('/', carrinhoController.getAllCarrinhos);
router.post('/', carrinhoController.createCarrinho);
router.get('/:id', carrinhoController.getCarrinhoById);
router.put('/:id', carrinhoController.updateCarrinho);
router.delete('/:id', carrinhoController.deleteCarrinho);

module.exports = router;
