const dbConnection = require('../db/dbConnection.js')

class CarrinhoModel {
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
    const sql = "SELECT * FROM carrinho";
    return this.executeSQL(sql);
  }

  read(id) {
    const sql = "SELECT * FROM carrinho WHERE id = ?";
    return this.executeSQL(sql, id);
  }

  create(newCarrinho) {
    const sql = "INSERT INTO carrinho (comprador_id, produto_id, quantidade) VALUES (?, ?, ?)";
    const values = [newCarrinho.comprador_id, newCarrinho.produto_id, newCarrinho.quantidade];
    return this.executeSQL(sql, values);
  }

  update(updatedCarrinho, id) {
    const sql = "UPDATE carrinho SET  quantidade = ? WHERE id = ?";
    const values = [ updatedCarrinho.quantidade, id];
    return this.executeSQL(sql, values);
  }

  delete(id) {
    const sql = "DELETE FROM carrinho WHERE id = ?";
    return this.executeSQL(sql, id);
  }
}

module.exports = new CarrinhoModel();
