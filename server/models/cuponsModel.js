const dbConnection = require('../db/dbConnection.js')

class CuponsModel {
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
    const sql = "SELECT * FROM cupons";
    return this.executeSQL(sql);
  }

  read(id) {
    const sql = "SELECT * FROM cupons WHERE id = ?";
    return this.executeSQL(sql, id);
  }

  create(newCupom) {
    const sql = "INSERT INTO cupons (codigo, desconto, data_validade) VALUES (?, ?, ?)";
    const values = [newCupom.codigo, newCupom.desconto, newCupom.data_validade];
    return this.executeSQL(sql, values);
  }

  update(updatedCupom, id) {
    const sql = "UPDATE cupons SET codigo = ?, desconto = ?, data_validade = ? WHERE id = ?";
    const values = [updatedCupom.codigo, updatedCupom.desconto, updatedCupom.data_validade, id];
    return this.executeSQL(sql, values);
  }

  delete(id) {
    const sql = "DELETE FROM cupons WHERE id = ?";
    return this.executeSQL(sql, id);
  }
}

new ItemDaTabela(nome_da_tabela, id);
ItemDaTabela.update(valores);

module.exports = new CuponsModel();
