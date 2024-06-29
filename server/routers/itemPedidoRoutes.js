const express = require('express');
const router = express.Router();
const itemPedidoController = require('../controllers/itemPedidoController');

router.get('/', itemPedidoController.getAllitemPedidos);
router.post('/', itemPedidoController.createitemPedido);
router.get('/:id', itemPedidoController.getitemPedidoById);
router.put('/:id', itemPedidoController.updateitemPedido);
router.delete('/:id', itemPedidoController.deleteitemPedido);

module.exports = router;
