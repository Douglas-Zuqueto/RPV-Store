const ChatModel = new URL('../models/chatModel.js', import.meta.url);

exports.getAllChats = async (req, res) => {
  try {
    const chats = await ChatModel.readList();
    res.json(chats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createChat = async (req, res) => {
  try {
    const newChat = req.body;
    const chat = await ChatModel.create(newChat);
    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getChatById = async (req, res) => {
  try {
    const chat = await ChatModel.read(req.params.id);
    if (chat) {
      res.json(chat);
    } else {
      res.status(404).json({ message: 'Chat não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateChat = async (req, res) => {
  try {
    const updatedChat = req.body;
    const chat = await ChatModel.update(updatedChat, req.params.id);
    res.json(chat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCategoria = async (req, res) => {
  try {
    await ChatModel.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
