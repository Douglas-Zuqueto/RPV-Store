// Importação do módulo express para criação de rotas
const express = require('express');
const router = express.Router();  // Cria um novo router do Express para definir rotas

// Importa o controller de compradores para lidar com as requisições
const compradorController = require('../controllers/compradorController');

// Definição das rotas da API para compradores
router.get('/Login', compradorController.getAllCompradores);  // Rota para obter todos os compradores
router.post('/Registrar', compradorController.createComprador);  // Rota para registrar um novo comprador
router.get('/:id', compradorController.getCompradorById);  // Rota para obter um comprador específico por ID
router.put('/:id', compradorController.updateComprador);  // Rota para atualizar informações de um comprador específico por ID
router.delete('/:id', compradorController.deleteComprador);  // Rota para deletar um comprador específico por ID

module.exports = router;  // Exporta o router com as rotas configuradas para uso em outros módulos
