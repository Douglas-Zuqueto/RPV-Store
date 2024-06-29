const dbConnection = require('../db/dbConnection');

class EnderecoModel {
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
    const sql = "SELECT * FROM enderecos";
    return this.executeSQL(sql);
  }

  read(id) {
    const sql = "SELECT * FROM enderecos WHERE id = ?";
    return this.executeSQL(sql, id);
  }

  create(newEndereco) {
    const sql = "INSERT INTO enderecos (comprador_id, rua, numero, cidade, estado, cep) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [newEndereco.comprador_id, newEndereco.rua, newEndereco.numero, newEndereco.cidade, newEndereco.estado, newEndereco.cep];
    return this.executeSQL(sql, values);
  }

  update(updatedEndereco, id) {
    const sql = "UPDATE enderecos SET comprador_id = ?, rua = ?, numero = ?, cidade = ?, estado = ?, cep = ? WHERE id = ?";
    const values = [updatedEndereco.comprador_id, updatedEndereco.rua, updatedEndereco.numero, updatedEndereco.cidade, updatedEndereco.estado, updatedEndereco.cep, id];
    return this.executeSQL(sql, values);
  }

  delete(id) {
    const sql = "DELETE FROM enderecos WHERE id = ?";
    return this.executeSQL(sql, id);
  }
}

module.exports = new EnderecoModel();
