const express = require('express');
const router = express.Router();
const enderecoController = require('../controllers/enderecoController');

router.get('/', enderecoController.getAllEnderecos);
router.post('/', enderecoController.createEndereco);
router.get('/:id', enderecoController.getEnderecoById);
router.put('/:id', enderecoController.updateEndereco);
router.delete('/:id', enderecoController.deleteEndereco);

module.exports = router;
