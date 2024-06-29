const dbConnection = require('../db/dbConnection');

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
    const sql = "INSERT INTO carrinho (produto_id, quantidade, preco_total) VALUES (?, ?, ?)";
    const values = [newCarrinho.produto_id, newCarrinho.quantidade, newCarrinho.preco_total];
    return this.executeSQL(sql, values);
  }

  update(updatedCarrinho, id) {
    const sql = "UPDATE carrinho SET produto_id = ?, quantidade = ?, preco_total = ? WHERE id = ?";
    const values = [updatedCarrinho.produto_id, updatedCarrinho.quantidade, updatedCarrinho.preco_total, id];
    return this.executeSQL(sql, values);
  }

  delete(id) {
    const sql = "DELETE FROM carrinho WHERE id = ?";
    return this.executeSQL(sql, id);
  }
}

module.exports = new CarrinhoModel();
