class eCommerceDatabase {
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
    const sql =
      "CREATE DATABASE IF NOT EXISTS db_ecommerce DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci";

    this.connection.query(sql, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar o banco de dados...");
        console.log(error.message);
        return;
      }
      console.log("Banco de dados criado com sucesso...");

      this.connection.query("USE db_ecommerce", (error) => {
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
    const sqlAdmin = `
            CREATE TABLE IF NOT EXISTS db_ecommerce.admin (
              id INT NOT NULL AUTO_INCREMENT,
              nome VARCHAR(255) NOT NULL,
              email VARCHAR(255) NOT NULL,
              senha VARCHAR(255) NOT NULL,
              PRIMARY KEY (id),
              UNIQUE INDEX email (email ASC) VISIBLE)
            ENGINE = InnoDB
            AUTO_INCREMENT = 3
            DEFAULT CHARACTER SET = utf8mb4
            COLLATE = utf8mb4_0900_ai_ci`;

    this.connection.query(sqlAdmin, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar a tabela admin...");
        console.log(error.message);
        return;
      }
      console.log("Tabela admin criada com sucesso...");
    });

    const sqlCompradores = `
            CREATE TABLE IF NOT EXISTS db_ecommerce.compradores (
              id INT NOT NULL AUTO_INCREMENT,
              nome VARCHAR(255) NOT NULL,
              email VARCHAR(255) NOT NULL,
              senha VARCHAR(255) NOT NULL,
              telefone VARCHAR(45) NULL DEFAULT NULL,
              cpf VARCHAR(20) NULL DEFAULT NULL,
              PRIMARY KEY (id),
              UNIQUE INDEX email (email ASC) VISIBLE,
              UNIQUE INDEX cpf_UNIQUE (cpf ASC) VISIBLE)
            ENGINE = InnoDB
            AUTO_INCREMENT = 3
            DEFAULT CHARACTER SET = utf8mb4
            COLLATE = utf8mb4_0900_ai_ci`;

    this.connection.query(sqlCompradores, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar a tabela compradores...");
        console.log(error.message);
        return;
      }
      console.log("Tabela compradores criada com sucesso...");
    });

    const sqlCategorias = `
            CREATE TABLE IF NOT EXISTS db_ecommerce.categorias (
              id INT NOT NULL AUTO_INCREMENT,
              nome VARCHAR(255) NOT NULL,
              PRIMARY KEY (id))
            ENGINE = InnoDB
            AUTO_INCREMENT = 6
            DEFAULT CHARACTER SET = utf8mb4
          COLLATE = utf8mb4_0900_ai_ci`;

    this.connection.query(sqlCategorias, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar a tabela categorias...");
        console.log(error.message);
        return;
      }
      console.log("Tabela categorias criada com sucesso...");
    });

    const sqlProdutos = `
            CREATE TABLE IF NOT EXISTS db_ecommerce.produtos (
              id INT NOT NULL AUTO_INCREMENT,
              nome VARCHAR(255) NOT NULL,
              preco DECIMAL(10,2) NOT NULL,
              descricao_detalhada TEXT NULL DEFAULT NULL,
              imagem VARCHAR(255) NULL DEFAULT NULL,
              qnt_estoque DECIMAL(10,2) NOT NULL,
              categoria_id INT NULL DEFAULT NULL,
              PRIMARY KEY (id),
              INDEX categoria_id (categoria_id ASC) VISIBLE,
              CONSTRAINT produtos_ibfk_2
                FOREIGN KEY (categoria_id)
                REFERENCES db_ecommerce.categorias (id))
            ENGINE = InnoDB
            AUTO_INCREMENT = 6
            DEFAULT CHARACTER SET = utf8mb4
            COLLATE = utf8mb4_0900_ai_ci`;

    this.connection.query(sqlProdutos, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar a tabela produtos...");
        console.log(error.message);
        return;
      }
      console.log("Tabela produtos criada com sucesso...");
    });

    const sqlCarrinho = `
            CREATE TABLE IF NOT EXISTS db_ecommerce.carrinho (
              id INT NOT NULL AUTO_INCREMENT,
              comprador_id INT NULL DEFAULT NULL,
              produto_id INT NULL DEFAULT NULL,
              quantidade INT NOT NULL,
              PRIMARY KEY (id),
              INDEX comprador_id (comprador_id ASC) VISIBLE,
              INDEX produto_id (produto_id ASC) VISIBLE,
              CONSTRAINT carrinho_ibfk_1
                FOREIGN KEY (comprador_id)
                REFERENCES db_ecommerce.compradores (id),
              CONSTRAINT carrinho_ibfk_2
                FOREIGN KEY (produto_id)
                REFERENCES db_ecommerce.produtos (id))
            ENGINE = InnoDB
            AUTO_INCREMENT = 5
            DEFAULT CHARACTER SET = utf8mb4
            COLLATE = utf8mb4_0900_ai_ci`;

    this.connection.query(sqlCarrinho, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar a tabela carrinho...");
        console.log(error.message);
        return;
      }
      console.log("Tabela carrinho criada com sucesso...");
    });

    const sqlCartoes = `
            CREATE TABLE IF NOT EXISTS db_ecommerce.cartoes (
              id INT NOT NULL AUTO_INCREMENT,
              comprador_id INT NULL DEFAULT NULL,
              tipo ENUM(credito, debito) NOT NULL,
              nome_titular VARCHAR(255) NOT NULL,
              numero_cartao VARCHAR(20) NOT NULL,
              validade DATE NOT NULL,
              cvv VARCHAR(4) NOT NULL,
              PRIMARY KEY (id),
              INDEX comprador_id (comprador_id ASC) VISIBLE,
              CONSTRAINT cartoes_ibfk_1
                FOREIGN KEY (comprador_id)
                REFERENCES db_ecommerce.compradores (id))
            ENGINE = InnoDB
            AUTO_INCREMENT = 3
            DEFAULT CHARACTER SET = utf8mb4
            COLLATE = utf8mb4_0900_ai_ci`;

    this.connection.query(sqlCartoes, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar a tabela cartoes...");
        console.log(error.message);
        return;
      }
      console.log("Tabela cartoes criada com sucesso...");
    });

    const sqlChats = `
            CREATE TABLE IF NOT EXISTS db_ecommerce.chats (
              id INT NOT NULL AUTO_INCREMENT,
              comprador_id INT NULL DEFAULT NULL,
              data_inicio TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
              PRIMARY KEY (id),
              INDEX comprador_id (comprador_id ASC) VISIBLE,
              CONSTRAINT chats_ibfk_1
                FOREIGN KEY (comprador_id)
                REFERENCES db_ecommerce.compradores (id))
            ENGINE = InnoDB
            DEFAULT CHARACTER SET = utf8mb4
            COLLATE = utf8mb4_0900_ai_ci`;

    this.connection.query(sqlChats, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar a tabela chats...");
        console.log(error.message);
        return;
      }
      console.log("Tabela chats criada com sucesso...");
    });

    const sqlCupons = `
            CREATE TABLE IF NOT EXISTS db_ecommerce.cupons (
              id INT NOT NULL AUTO_INCREMENT,
              codigo VARCHAR(50) NOT NULL,
              desconto DECIMAL(5,2) NOT NULL,
              data_validade DATE NOT NULL,
              PRIMARY KEY (id),
              UNIQUE INDEX codigo (codigo ASC) VISIBLE)
            ENGINE = InnoDB
            AUTO_INCREMENT = 3
            DEFAULT CHARACTER SET = utf8mb4
            COLLATE = utf8mb4_0900_ai_ci`;

    this.connection.query(sqlCupons, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar a tabela cupons...");
        console.log(error.message);
        return;
      }
      console.log("Tabela cupos criada com sucesso...");
    });

    const sqlEnderecos = `
            CREATE TABLE IF NOT EXISTS db_ecommerce.enderecos (
              id INT NOT NULL AUTO_INCREMENT,
              comprador_id INT NULL DEFAULT NULL,
              endereco VARCHAR(255) NOT NULL,
              cidade VARCHAR(100) NOT NULL,
              estado VARCHAR(100) NOT NULL,
              cep VARCHAR(20) NOT NULL,
              pais VARCHAR(100) NOT NULL,
              PRIMARY KEY (id),
              INDEX comprador_id (comprador_id ASC) VISIBLE,
              CONSTRAINT enderecos_ibfk_1
                FOREIGN KEY (comprador_id)
                REFERENCES db_ecommerce.compradores (id))
            ENGINE = InnoDB
            AUTO_INCREMENT = 5
            DEFAULT CHARACTER SET = utf8mb4
            COLLATE = utf8mb4_0900_ai_ci`;

    this.connection.query(sqlEnderecos, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar a tabela enderecos...");
        console.log(error.message);
        return;
      }
      console.log("Tabela enderecos criada com sucesso...");
    });

    const sqlPedidos = `
            CREATE TABLE IF NOT EXISTS db_ecommerce.pedidos (
              id INT NOT NULL AUTO_INCREMENT,
              comprador_id INT NULL DEFAULT NULL,
              data_pedido TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
              total DECIMAL(10,2) NULL DEFAULT NULL,
              forma_pagamento VARCHAR(50) NULL DEFAULT NULL,
              status VARCHAR(50) NULL DEFAULT 'pendente',
              endereco_id INT NULL DEFAULT NULL,
              cupom_id INT NULL DEFAULT NULL,
              frete DECIMAL(10,2) NULL DEFAULT NULL,
              PRIMARY KEY (id),
              INDEX comprador_id (comprador_id ASC) VISIBLE,
              INDEX endereco_id (endereco_id ASC) VISIBLE,
              INDEX cupom_id (cupom_id ASC) VISIBLE,
              CONSTRAINT pedidos_ibfk_1
                FOREIGN KEY (comprador_id)
                REFERENCES db_ecommerce.compradores (id),
              CONSTRAINT pedidos_ibfk_2
                FOREIGN KEY (endereco_id)
                REFERENCES db_ecommerce.enderecos (id),
              CONSTRAINT pedidos_ibfk_3
                FOREIGN KEY (cupom_id)
                REFERENCES db_ecommerce.cupons (id))
            ENGINE = InnoDB
            AUTO_INCREMENT = 3
            DEFAULT CHARACTER SET = utf8mb4
            COLLATE = utf8mb4_0900_ai_ci`;

    this.connection.query(sqlPedidos, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar a tabela pedidos...");
        console.log(error.message);
        return;
      }
      console.log("Tabela pedidos criada com sucesso...");
    });
    
    const sqlHistoricoPedidos = `
            CREATE TABLE IF NOT EXISTS db_ecommerce.historico_pedidos(
              id INT NOT NULL AUTO_INCREMENT,
              pedido_id INT NULL DEFAULT NULL,
              status VARCHAR(50) NULL DEFAULT NULL,
              data_status TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
              PRIMARY KEY (id),
              INDEX pedido_id (pedido_id ASC) VISIBLE,
              CONSTRAINT historico_pedidos_ibfk_1
                FOREIGN KEY (pedido_id)
                REFERENCES db_ecommerce.pedidos (id))
            ENGINE = InnoDB
            AUTO_INCREMENT = 7
            DEFAULT CHARACTER SET = utf8mb4
            COLLATE = utf8mb4_0900_ai_ci`;

    this.connection.query(sqlHistoricoPedidos, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar a tabela historico_pedidos...");
        console.log(error.message);
        return;
      }
      console.log("Tabela historico_pedidos criada com sucesso...");
    });

    const sqlItensPedidos = `
            CREATE TABLE IF NOT EXISTS db_ecommerce.itens_pedidos(
              id INT NOT NULL AUTO_INCREMENT,
              pedido_id INT NULL DEFAULT NULL,
              produto_id INT NULL DEFAULT NULL,
              quantidade DECIMAL(10,2) NOT NULL,
              preco_unitario DECIMAL(10,2) NOT NULL,
              desconto DECIMAL(5,2) NOT NULL DEFAULT '0.00',
              total DECIMAL(10,2) GENERATED ALWAYS AS ((quantidade * (preco_unitario - ((preco_unitario * desconto) / 100)))) STORED,
              PRIMARY KEY (id),
              INDEX pedido_id (pedido_id ASC) VISIBLE,
              INDEX produto_id (produto_id ASC) VISIBLE,
              CONSTRAINT itens_pedido_ibfk_1
                FOREIGN KEY (pedido_id)
                REFERENCES db_ecommerce.pedidos (id),
              CONSTRAINT itens_pedido_ibfk_2
                FOREIGN KEY (produto_id)
                REFERENCES db_ecommerce.produtos (id))
            ENGINE = InnoDB
            AUTO_INCREMENT = 5
            DEFAULT CHARACTER SET = utf8mb4
            COLLATE = utf8mb4_0900_ai_ci`;

    this.connection.query(sqlItensPedidos, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar a tabela itens_pedidos...");
        console.log(error.message);
        return;
      }
      console.log("Tabela itens_pedidos criada com sucesso...");
    });

    const sqlMensagens = `
            CREATE TABLE IF NOT EXISTS db_ecommerce.mensagens(
              id INT NOT NULL AUTO_INCREMENT,
              chat_id INT NULL DEFAULT NULL,
              remetente ENUM('comprador', 'admin') NOT NULL,
              mensagem TEXT NOT NULL,
              data_envio TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
              PRIMARY KEY (id),
              INDEX chat_id (chat_id ASC) VISIBLE,
              CONSTRAINT mensagens_ibfk_1
                FOREIGN KEY (chat_id)
                REFERENCES db_ecommerce.chats (id))
            ENGINE = InnoDB
            DEFAULT CHARACTER SET = utf8mb4
            COLLATE = utf8mb4_0900_ai_ci`;

    this.connection.query(sqlMensagens, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar a tabela mensagens...");
        console.log(error.message);
        return;
      }
      console.log("Tabela mensagens criada com sucesso...");
    });

    const sqlPromocoes = `
            CREATE TABLE IF NOT EXISTS db_ecommerce.promocoes(
              id INT NOT NULL AUTO_INCREMENT,
              produto_id INT NULL DEFAULT NULL,
              desconto DECIMAL(5,2) NOT NULL,
              data_inicio DATE NOT NULL,
              data_fim DATE NOT NULL,
              PRIMARY KEY (id),
              INDEX produto_id (produto_id ASC) VISIBLE,
              CONSTRAINT promocoes_ibfk_1
                FOREIGN KEY (produto_id)
                REFERENCES db_ecommerce.produtos (id))
            ENGINE = InnoDB
            AUTO_INCREMENT = 3
            DEFAULT CHARACTER SET = utf8mb4
            COLLATE = utf8mb4_0900_ai_ci`;

    this.connection.query(sqlPromocoes, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar a tabela promocoes...");
        console.log(error.message);
        return;
      }
      console.log("Tabela promocoes criada com sucesso...");
    });
  }
}

module.exports = new eCommerceDatabase();
