const dbConnection = require('../db/dbConnection');

class CategoriaModel {
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
    const sql = "SELECT * FROM categorias";
    return this.executeSQL(sql);
  }

  read(id) {
    const sql = "SELECT * FROM categorias WHERE id = ?";
    return this.executeSQL(sql, id);
  }

  create(newCategoria) {
    const sql = "INSERT INTO categorias (nome) VALUES (?)";
    const values = [newCategoria.nome];
    return this.executeSQL(sql, values);
  }

  update(updatedCategoria, id) {
    const sql = "UPDATE categorias SET nome = ? WHERE id = ?";
    const values = [updatedCategoria.nome, id];
    return this.executeSQL(sql, values);
  }

  delete(id) {
    const sql = "DELETE FROM categorias WHERE id = ?";
    return this.executeSQL(sql, id);
  }
}

module.exports = new CategoriaModel();
