const dbConnection = require('../db/dbConnection.js'); // Importa o módulo de conexão com o banco de dados

class CompradorModel {
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

  // Retorna todos os compradores cadastrados
  readList() {
    const sql = "SELECT * FROM compradores";
    return this.executeSQL(sql);
  }

  // Retorna um comprador específico baseado no ID
  read(id) {
    const sql = "SELECT * FROM compradores WHERE id = ?";
    return this.executeSQL(sql, id);
  }

  // Cria um novo comprador na tabela 'compradores'
  create(newComprador) {
    const sql = "INSERT INTO compradores (nome, email, senha, telefone, cpf) VALUES (?, ?, ?, ?, ?)";
    const values = [newComprador.nome, newComprador.email, newComprador.senha, newComprador.telefone, newComprador.cpf];
    return this.executeSQL(sql, values);
  }

  // Atualiza os dados de um comprador baseado no ID
  update(updatedComprador, id) {
    const sql = "UPDATE compradores SET nome = ?, email = ?, senha = ?, telefone = ?, cpf = ? WHERE id = ?";
    const values = [updatedComprador.nome, updatedComprador.email, updatedComprador.senha, updatedComprador.telefone, updatedComprador.cpf, id];
    return this.executeSQL(sql, values);
  }

  // Deleta um comprador da tabela 'compradores' baseado no ID
  delete(id) {
    const sql = "DELETE FROM compradores WHERE id = ?";
    return this.executeSQL(sql, id);
  }
}

module.exports = new CompradorModel(); // Exporta uma instância única da classe CompradorModel
