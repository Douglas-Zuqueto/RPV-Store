const dbConnection = require('../db/dbConnection');

class PedidoModel {
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
    const sql = "SELECT * FROM pedidos";
    return this.executeSQL(sql);
  }

  read(id) {
    const sql = "SELECT * FROM pedidos WHERE id = ?";
    return this.executeSQL(sql, id);
  }

  create(newPedido) {
    const sql = "INSERT INTO pedidos (comprador_id, data_pedido, status) VALUES (?, ?, ?)";
    const values = [newPedido.comprador_id, newPedido.data_pedido, newPedido.status];
    return this.executeSQL(sql, values);
  }

  update(updatedPedido, id) {
    const sql = "UPDATE pedidos SET comprador_id = ?, data_pedido = ?, status = ? WHERE id = ?";
    const values = [updatedPedido.comprador_id, updatedPedido.data_pedido, updatedPedido.status, id];
    return this.executeSQL(sql, values);
  }

  delete(id) {
    const sql = "DELETE FROM pedidos WHERE id = ?";
    return this.executeSQL(sql, id);
  }
}

module.exports = new PedidoModel();
