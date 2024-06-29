const express = require('express');
const router = express.Router();
const cartaoController = require('../controllers/cartaoController');

router.get('/', cartaoController.getAllCartoes);
router.post('/', cartaoController.createCartao);
router.get('/:id', cartaoController.getCartaoById);
router.put('/:id', cartaoController.updateCartao);
router.delete('/:id', cartaoController.deleteCartao);

module.exports = router;
