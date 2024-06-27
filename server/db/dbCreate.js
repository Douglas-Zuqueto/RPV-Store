class taskDatabase {
  
    initConnection(connection) {
        this.connection = connection; 
        this.initDatabase(); 
      }
    
    initDatabase() {
        this.connection.connect((error) => {
          if (error) {
            console.log("Ocorreu um erro ao conectar no banco de dados..."); 
            console.log(error.message); 
            return;
          }
          console.log("Banco de dados conectado com sucesso..."); 
          this.createDatabase(); 
        });
      }
    
    createDatabase() {
        const sql = "CREATE DATABASE IF NOT EXISTS db_task";
        this.connection.query(sql, (error) => {
          if (error) {
            console.log("Ocorreu um erro ao criar o banco de dados..."); 
            console.log(error.message); 
            return;
          }
          console.log("Banco de dados criado com sucesso..."); 
          this.connection.query("USE db_task", (error) => {
            if (error) {
              console.log("Ocorreu um erro ao selecionar o banco de dados..."); 
              console.log(error.message); 
              return;
            }
            console.log("Banco de dados selecionado com sucesso..."); 
            this.createTable(); 
          });
        });
      }
    
    createTable() {
        const sql = `
            CREATE TABLE IF NOT EXISTS task (
              id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
              descricao VARCHAR(100),
              situacao_atual SET('A Fazer', 'Em Progresso', 'Concluída'),
              data_de_abertura DATE,
              data_de_conclusao DATE
            )
          `;
        this.connection.query(sql, (error) => {
          if (error) {
            console.log("Ocorreu um erro ao criar a tabela task..."); 
            console.log(error.message);
            return;
          }
          console.log("Tabela task criada com sucesso..."); 
        });
      }
    }
    
    module.exports = new taskDatabase();
    