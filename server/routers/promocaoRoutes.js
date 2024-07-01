const express = require('express');
const router = express.Router();
const promocaoController = require('../controllers/promocaoController');

router.get('/', promocaoController.getAllPromocaos);
router.post('/', promocaoController.createPromocao);
router.get('/:id', promocaoController.getPromocaoById);
router.put('/:id', promocaoController.updatePromocao);
router.delete('/:id', promocaoController.deletePromocao);

module.exports = router;
