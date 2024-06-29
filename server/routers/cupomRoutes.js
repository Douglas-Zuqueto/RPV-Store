const express = require('express');
const router = express.Router();
const cupomController = require('../controllers/cupomController');

router.get('/', cupomController.getAllCupoms);
router.post('/', cupomController.createCupom);
router.get('/:id', cupomController.getCupomById);
router.put('/:id', cupomController.updateCupom);
router.delete('/:id', cupomController.deleteCupom);

module.exports = router;
