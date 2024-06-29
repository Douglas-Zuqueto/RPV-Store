const dbConnection = require('../db/dbConnection');

class HistoricoPedidosModel {
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

  lerMeuHIstorico(usuario_id) {
    const sql = "SELECT historico_pedidos.* FROM historico_pedidos, pedidos WHERE pedidos.comprador_id = ?";
    return this.executeSQL(sql, usuario_id);
  }
  create(newHistoricoPedido) {
    const sql = "INSERT INTO historico_pedidos (pedido_id, status, data_status) VALUES (?, ?, ?)";
    const values = [newHistoricoPedido.pedido_id, newHistoricoPedido.status, newHistoricoPedido.data_status];
    return this.executeSQL(sql, values);
  }
  update(updatedHistoricoPedido, id) {
    const sql = "UPDATE historico_pedidos SET pedido_id = ?, status = ?, data_status = ? WHERE id = ?";
    const values = [updatedHistoricoPedido.pedido_id, updatedHistoricoPedido.status, updatedHistoricoPedido.data_status, id];
    return this.executeSQL(sql, values);
  }
}

module.exports = new HistoricoPedidosModel();
