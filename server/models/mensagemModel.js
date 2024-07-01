const dbConnection = require('../db/dbConnection.js')

class MensagemModel {
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
    const sql = "SELECT * FROM mensagens";
    return this.executeSQL(sql);
  }

  read(id) {
    const sql = "SELECT * FROM mensagens WHERE id = ?";
    return this.executeSQL(sql, id);
  }

  create(newMensagem) {
    const sql = "INSERT INTO mensagens (chat_id, texto, data_envio) VALUES (?, ?, ?)";
    const values = [newMensagem.chat_id, newMensagem.texto, newMensagem.data_envio];
    return this.executeSQL(sql, values);
  }

  update(updatedMensagem, id) {
    const sql = "UPDATE mensagens SET texto = ?, data_envio = ? WHERE id = ?";
    const values = [updatedMensagem.texto, updatedMensagem.data_envio, id];
    return this.executeSQL(sql, values);
  }

  delete(id) {
    const sql = "DELETE FROM mensagens WHERE id = ?";
    return this.executeSQL(sql, id);
  }
}

module.exports = new MensagemModel();
