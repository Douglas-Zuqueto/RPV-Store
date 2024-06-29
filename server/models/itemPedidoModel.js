const dbConnection = require('../db/dbConnection');

class ItensPedidoModel {
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
    const sql = "SELECT * FROM itens_pedido";
    return this.executeSQL(sql);
  }

  read(id) {
    const sql = "SELECT * FROM itens_pedido WHERE id = ?";
    return this.executeSQL(sql, id);
  }

  create(newItemPedido) {
    const sql = "INSERT INTO itens_pedido (pedido_id, produto_id, quantidade, preco_unitario, desconto) VALUES (?, ?, ?, ?, ?)";
    const values = [newItemPedido.pedido_id, newItemPedido.produto_id, newItemPedido.quantidade, newItemPedido.preco_unitario, newItemPedido.desconto];
    return this.executeSQL(sql, values);
  }

  update(updatedItemPedido, id) {
    const sql = "UPDATE itens_pedido SET pedido_id = ?, produto_id = ?, quantidade = ?, preco_unitario = ?, desconto = ? WHERE id = ?";
    const values = [updatedItemPedido.pedido_id, updatedItemPedido.produto_id, updatedItemPedido.quantidade, updatedItemPedido.preco_unitario, updatedItemPedido.desconto, id];
    return this.executeSQL(sql, values);
  }

  delete(id) {
    const sql = "DELETE FROM itens_pedido WHERE id = ?";
    return this.executeSQL(sql, id);
  }
}

module.exports = new ItensPedidoModel();
