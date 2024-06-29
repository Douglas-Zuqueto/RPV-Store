const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/', chatController.getAllChats);
router.post('/', chatController.createChat);
router.get('/:id', chatController.getChatById);
router.put('/:id', chatController.updateChat);
router.delete('/:id', chatController.deleteChat);

module.exports = router;
