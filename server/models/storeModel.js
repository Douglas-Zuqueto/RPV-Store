const dbConnection = require("../db/dbConnection");

class taskModel {

  executeSQL(sql, parameters = "") {
    return new Promise( function (resolve, reject) {
        
        dbConnection.query(sql, parameters, function (error, resposta) {
          if (error) {
            return reject(error);
          }
          return resolve(resposta);
        });
      }
    );
  }

  readList() {
    const sql = "SELECT id, nome, preco, descricao_detalhada, imagem, qnt_estoque, categoria FROM produtos"; 
    return this.executeSQL(sql); 
  }

  read(nome) {
    const sql = "SELECT id, nome, preco, descricao_detalhada, imagem, qnt_estoque, categoria FROM produtos WHERE nome = ?"; 
    return this.executeSQL(sql, nome); 
  }
  readOrder() {
    const sql = "SELECT id, pedido_id, produto_id, quantidade, preco_unitario, desconto, total FROM itens_pedidos WHERE nome = ?"; 
    return this.executeSQL(sql, nome); 
  }

  create(newTask) {
    const sql = "INSERT INTO task (descricao , situacao_atual, data_de_abertura, data_de_conclusao) VALUES (?, ?, ?, ?)";
    if (newTask.conclusao === '') { newTask.conclusao = null; }
    const values = [newTask.descricao, newTask.situation, newTask.abertura, newTask.conclusao]; 
    return this.executeSQL(sql, values); 
  }

  update(updatedTask, id) {
    const sql = "UPDATE task SET descricao = ?, situacao_atual = ?, data_de_abertura = ?, data_de_conclusao = ? WHERE id = ?"; 
    if (updatedTask.conclusao === '') { updatedTask.conclusao = null; }
    const values = [updatedTask.descricao, updatedTask.situation, updatedTask.abertura, updatedTask.conclusao, id]; 
    return this.executeSQL(sql, values); 
  }

  delete(id) {
    const sql = "DELETE FROM task WHERE id = ?"; 
    return this.executeSQL(sql, id); 
  }

}

module.exports = new taskModel();
