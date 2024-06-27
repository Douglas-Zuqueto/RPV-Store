const dbConnection = require('../db/dbConnection');

class ProdutoModel {
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
    const sql = "SELECT nome, preco, descricao, imagem_url, estoque FROM produtos";
    return this.executeSQL(sql);
  }

  read(nome) {
    const sql = "SELECT nome, preco, descricao, imagem_url, estoque FROM produtos WHERE nome = ?";
    return this.executeSQL(sql, nome);
  }

  create(newProduto) {
    const sql = "INSERT INTO produtos (nome, preco, descricao, imagem_url, estoque) VALUES (?, ?, ?, ?, ?)";
    const values = [newProduto.nome, newProduto.preco, newProduto.descricao, newProduto.imagem_url, newProduto.estoque];
    return this.executeSQL(sql, values);
  }

  update(updatedProduto, id) {
    const sql = "UPDATE produtos SET nome = ?, preco = ?, descricao = ?, imagem_url = ?, estoque = ? WHERE id = ?";
    const values = [updatedProduto.nome, updatedProduto.preco, updatedProduto.descricao, updatedProduto.imagem_url, updatedProduto.estoque, id];
    return this.executeSQL(sql, values);
  }

  delete(id) {
    const sql = "DELETE FROM produtos WHERE id = ?";
    return this.executeSQL(sql, id);
  }
}

module.exports = new ProdutoModel();
