const express = require('express');
const router = express.Router();
const historicoPedidoController = require('../controllers/historicoPedidoController');

router.get('/historico', historicoPedidoController.lerMeuHIstorico);
router.post('/', historicoPedidoController.createhistoricoPedido);
router.put('/:id', historicoPedidoController.updatehistoricoPedido);
router.delete('/:id', historicoPedidoController.deletehistoricoPedido);

module.exports = router;
