const express = require('express');
const router = express.Router();
const compradorController = require('../controllers/compradorController');

router.get('/', compradorController.getAllCompradores);
router.post('/', compradorController.createComprador);
router.get('/:id', compradorController.getCompradorById);
router.put('/:id', compradorController.updateComprador);
router.delete('/:id', compradorController.deleteComprador);

module.exports = router;
