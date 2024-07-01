const dbConnection = new URL('./db/dbConnection.js', import.meta.url);

class CartaoModel {
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
    const sql = "SELECT * FROM cartoes";
    return this.executeSQL(sql);
  }

  read(id) {
    const sql = "SELECT * FROM cartoes WHERE id = ?";
    return this.executeSQL(sql, id);
  }

  create(newCartao) {
    const sql = "INSERT INTO cartoes (comprador_id, tipo, nome_titular, numero_cartao, validade, cvv) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [newCartao.comprador_id, newCartao.tipo, newCartao.nome_titular, newCartao.numero_cartao, newCartao.validade, newCartao.cvv];
    return this.executeSQL(sql, values);
  }

  update(updatedCartao, id) {
    const sql = "UPDATE cartoes SET tipo = ?, nome_titular = ?, numero_cartao = ?, validade = ?, cvv = ? WHERE id = ?";
    const values = [updatedCartao.tipo, updatedCartao.nome_titular, updatedCartao.numero_cartao, updatedCartao.validade, updatedCartao.cvv, id];
    return this.executeSQL(sql, values);
  }

  delete(id) {
    const sql = "DELETE FROM cartoes WHERE id = ?";
    return this.executeSQL(sql, id);
  }
}

module.exports = new CartaoModel();
