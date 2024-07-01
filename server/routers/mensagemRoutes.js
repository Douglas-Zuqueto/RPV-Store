const express = require('express');
const router = express.Router();
const mensagemController = require('../controllers/mensagemController');

router.get('/', mensagemController.getAllMensagems);
router.post('/', mensagemController.createMensagem);
router.get('/:id', mensagemController.getMensagemById);
router.put('/:id', mensagemController.updateMensagem);
router.delete('/:id', mensagemController.deleteMensagem);

module.exports = router;
