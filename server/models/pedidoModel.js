const dbConnection = new URL('./db/dbConnection.js', import.meta.url);

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
    const sql = "INSERT INTO pedidos (comprador_id, data_pedido, total, forma_pagamento, status, endereco_id, cupom_id, frete) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [newPedido.comprador_id, newPedido.data_pedido, newPedido.total, newPedido.forma_pagamento, newPedido.status, newPedido.edereco_id, newPedido.cupom_id, newPedido.frete];
    return this.executeSQL(sql, values);
  }

  update(updatedPedido, id) {
    const sql = "UPDATE pedidos SET data_pedido = ?, total = ?, forma_pagamento = ?, status = ?, frete WHERE id = ?";
    const values = [updatedPedido.data_pedido, updatedPedido.total, updatedPedido.forma_pagamento, updatedPedido.status, updatedPedido.frete, id];
    return this.executeSQL(sql, values);
  }

  delete(id) {
    const sql = "DELETE FROM pedidos WHERE id = ?";
    return this.executeSQL(sql, id);
  }
}

module.exports = new PedidoModel();
