const dbConnection = require('../db/dbConnection');

class ChatModel {
  executeSQL(sql, parameters = "") {
    return new Promise((resolve, reject) => {
      dbConnection.query(sql, parameters, (error, response) => {
        if (error) {
          return reject(error);
        }
        return resolve(response);
      });
    });
  }

  readList() {
    const sql = "SELECT * FROM chats";
    return this.executeSQL(sql);
  }

  read(id) {
    const sql = "SELECT * FROM chats WHERE id = ?";
    return this.executeSQL(sql, id);
  }

  create(newChat) {
    const sql = "INSERT INTO chats (comprador_id, data_criacao) VALUES (?, ?)";
    const values = [newChat.comprador_id, newChat.data_criacao];
    return this.executeSQL(sql, values);
  }

  update(updatedChat, id) {
    const sql = "UPDATE chats SET comprador_id = ?, data_criacao = ? WHERE id = ?";
    const values = [updatedChat.comprador_id, updatedChat.data_criacao, id];
    return this.executeSQL(sql, values);
  }

  delete(id) {
    const sql = "DELETE FROM chats WHERE id = ?";
    return this.executeSQL(sql, id);
  }
}

module.exports = new ChatModel();
