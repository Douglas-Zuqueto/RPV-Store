const dbConnection = require('../db/dbConnection');

class CartaoModel {
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
    const sql = "SELECT * FROM cartoes";
    return this.executeSQL(sql);
  }

  read(id) {
    const sql = "SELECT * FROM cartoes WHERE id = ?";
    return this.executeSQL(sql, id);
  }

  create(newCartao) {
    const sql = "INSERT INTO cartoes (numero, nome_titular, validade, cvv) VALUES (?, ?, ?, ?)";
    const values = [newCartao.numero, newCartao.nome_titular, newCartao.validade, newCartao.cvv];
    return this.executeSQL(sql, values);
  }

  update(updatedCartao, id) {
    const sql = "UPDATE cartoes SET numero = ?, nome_titular = ?, validade = ?, cvv = ? WHERE id = ?";
    const values = [updatedCartao.numero, updatedCartao.nome_titular, updatedCartao.validade, updatedCartao.cvv, id];
    return this.executeSQL(sql, values);
  }

  delete(id) {
    const sql = "DELETE FROM cartoes WHERE id = ?";
    return this.executeSQL(sql, id);
  }
}

module.exports = new CartaoModel();
