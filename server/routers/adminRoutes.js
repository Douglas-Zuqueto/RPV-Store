// Importação do módulo express para criação de rotas
const express = require('express');
const router = express.Router();  // Cria um novo router do Express para definir rotas

// Importa o controller de administração para lidar com as requisições
const adminController = require('../controllers/adminController');

// Definição das rotas da API para administração
router.get('/admin', adminController.getAllAdmins);  // Rota para obter todos os admins
router.post('/admin', adminController.createAdmin);  // Rota para criar um novo admin
router.get('/admin/:id', adminController.getAdminById);  // Rota para obter um admin específico por ID
router.put('/admin/:id', adminController.updateAdmin);  // Rota para atualizar um admin específico por ID
router.delete('/admin/:id', adminController.deleteAdmin);  // Rota para deletar um admin específico por ID

module.exports = router;  // Exporta o router com as rotas configuradas para uso em outros módulos
