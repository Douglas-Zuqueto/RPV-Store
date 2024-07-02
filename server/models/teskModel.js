// Importa o módulo que contém a conexão com o banco de dados
const dbConnection = require("../db/dbConnection");

// Define a classe teskModel para manipular operações relacionadas às vagas de emprego no banco de dados
class teskModel {

  // Método para executar consultas SQL no banco de dados
  executeSQL(sql, parameters = "") {
    // Retorna uma Promise que representa a execução da consulta SQL
    return new Promise( function (resolve, reject) {
        
        // Executa a consulta SQL utilizando a conexão com o banco de dados e os parâmetros fornecidos
        dbConnection.query(sql, parameters, function (error, resposta) {
          // Se ocorrer um erro durante a execução da consulta, rejeita a Promise com o erro
          if (error) {
            return reject(error);
          }
          // Se a consulta for bem-sucedida, resolve a Promise com a resposta do banco de dados
          return resolve(resposta);
        });

      }
    );
  }

  // Método para obter a lista de todas as vagas de emprego no banco de dados
  readList() {
    const sql = "SELECT id, nome, descricao, prioridade, data_Atualizada FROM tesk"; // Consulta SQL para selecionar todas as vagas de emprego
    return this.executeSQL(sql); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para obter uma vaga de emprego específica por ID no banco de dados
  read(id) {
    const sql = "SELECT id, nome, descricao, prioridade, data_Atualizada FROM tesk WHERE id = ?"; // Consulta SQL para selecionar uma vaga de emprego por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para criar uma nova vaga de emprego no banco de dados
  create(newTesk) {
    const sql = "INSERT INTO tesk (nome, descricao, prioridade, data_Atualizada) VALUES (?, ?, ?, ?)"; // Consulta SQL corrigida para inserir uma nova vaga de emprego
    const values = [newTesk.name, newTesk.subject, newTesk.priority, newTesk.data_Atualizada]; // Valores a serem inseridos na consulta SQL
    return this.executeSQL(sql, values); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para atualizar uma vaga de emprego existente por ID no banco de dados
  update(updatedTesk, id) {
    const sql = "UPDATE tesk SET nome = ?, descricao = ?, prioridade = ?, data_Atualizada = ? WHERE id = ?"; // Consulta SQL para atualizar uma vaga de emprego por ID
    const values = [updatedTesk.name, updatedTesk.subject, updatedTesk.priority, updatedTesk.data_Atualizada, id]; // Valores a serem inseridos na consulta SQL
    return this.executeSQL(sql, values); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

  // Método para excluir uma vaga de emprego existente por ID no banco de dados
  delete(id) {
    const sql = "DELETE FROM tesk WHERE id = ?"; // Consulta SQL para excluir uma vaga de emprego por ID
    return this.executeSQL(sql, id); // Executa a consulta SQL utilizando o método executeSQL e retorna o resultado
  }

}

// Exporta uma instância da classe teskModel para ser utilizada em outros arquivos do projeto
module.exports = new teskModel();

