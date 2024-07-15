const dbConnection = require('../db/dbConnection.js'); // Importa o módulo de conexão com o banco de dados

class AdminModel {
  // Método genérico para executar consultas SQL
  executeSQL(sql, parameters = "") {
    return new Promise((resolve, reject) => {
      // Utiliza a conexão com o banco de dados para executar a consulta
      dbConnection.query(sql, parameters, (error, response) => {
        if (error) {
          return reject(error); // Rejeita a Promise se houver erro
        }
        return resolve(response); // Resolve a Promise com os dados da consulta
      });
    });
  }

  // Retorna todos os registros da tabela 'admin'
  readList() {
    const sql = "SELECT * FROM admin";
    return this.executeSQL(sql);
  }

  // Retorna um único registro da tabela 'admin' baseado no ID
  read(id) {
    const sql = "SELECT * FROM admin WHERE id = ?";
    return this.executeSQL(sql, id);
  }

  // Insere um novo registro na tabela 'admin'
  create(newAdmin) {
    const sql = "INSERT INTO admin (nome, email, senha) VALUES (?, ?, ?)";
    const values = [newAdmin.nome, newAdmin.email, newAdmin.senha];
    return this.executeSQL(sql, values);
  }

  // Atualiza um registro na tabela 'admin' baseado no ID
  update(updatedAdmin, id) {
    const sql = "UPDATE admin SET nome = ?, email = ?, senha = ? WHERE id = ?";
    const values = [updatedAdmin.nome, updatedAdmin.email, updatedAdmin.senha, id];
    return this.executeSQL(sql, values);
  }

  // Deleta um registro da tabela 'admin' baseado no ID
  delete(id) {
    const sql = "DELETE FROM admin WHERE id = ?";
    return this.executeSQL(sql, id);
  }
}

module.exports = new AdminModel(); // Exporta uma instância única da classe AdminModel
