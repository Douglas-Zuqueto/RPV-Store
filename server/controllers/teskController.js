// Importa o modelo de tesk (vaga de emprego) para acessar as operações CRUD relacionadas a empregos
const teskModel = require("../../../Codificação para Back End - NodeJS/SA3/Bruno/models/teskModel");

// Define a classe teskController, responsável por controlar as operações relacionadas a empregos
class teskController {

  // Método para visualizar a pagina inicial
  viewRead(req, res) {
    return res.status(200).render("./index", { title: "Página Inicial"});
  }

  // Método para visualizar o formulário de criação de uma nova vaga de emprego
  viewCreate(req, res) {
    return res.status(200).render("./tesk/tesk_create", { title: "Adicionar Tarefa" });
  }

  // Método para visualizar o formulário de atualização de uma vaga de emprego existente
  viewUpdate(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função read() do modelo teskModel para obter a vaga de emprego com o ID fornecido
    const tesk = teskModel.read(id);
    return tesk
      .then((result) =>
        result.length == 0
          ? res.status(404).redirect("/")
          : res.status(200).render("./tesk/tesk_update", { title: "Atualizar Tarefa", tesks: result })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

  // Método para listar todas as vagas de emprego
  readList(req, res) {
    // Chama a função readList() do modelo teskModel para obter a lista de vagas de emprego
    const tesksList = teskModel.readList();
    return tesksList
      .then((result) =>
        result.length == 0
          ? res.status(404).render("./tesk/tesk_read", { title: "Tarefas", tesks: result })
          : res.status(200).render("./tesk/tesk_read", { title: "Tarefas", tesks: result })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

  // Método para ler uma vaga de emprego específica por ID
  read(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função read() do modelo teskModel para obter a vaga de emprego com o ID fornecido
    const tesk = teskModel.read(id);
    return tesk
      .then((result) =>
        result.length == 0
          ? res.status(404).render("./tesk/tesk_read", { title: "Tarefas", tesks: result })
          : res.status(200).render("./tesk/tesk_read", { title: "Tarefas", tesks: result })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

  // Método para criar uma nova vaga de emprego
  create(req, res) {
    // Obtém os dados da nova vaga de emprego do corpo da requisição
    const newTesk = req.body;
    newTesk.data_Atualizada = new Date().toLocaleDateString();

    // Chama a função create() do modelo teskModel para criar uma nova vaga de emprego
    const tesk = teskModel.create(newTesk);
    return tesk
      .then((result) => res.status(200).send("<script> alert('Tarefa criada com sucesso!'); window.location='/tesk' </script>"))
      .catch((error) => res.status(400).send(error.message));    
  }

  // Método para atualizar uma vaga de emprego existente por ID
  update(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Obtém os dados atualizados da vaga de emprego do corpo da requisição
    const updatedTesk = req.body;
    updatedTesk.data_Atualizada = new Date().toLocaleDateString();
    // Chama a função update() do modelo teskModel para atualizar a vaga de emprego com o ID fornecido
    const tesk = teskModel.update(updatedTesk, id);
    return tesk
      .then((result) => res.status(200).send("<script> alert('Tarefa atualizada com sucesso!'); window.location='../../tesk' </script>"))
      .catch((error) => res.status(400).send(error.message));   
  }

  // Método para excluir uma vaga de emprego existente por ID
  delete(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função delete() do modelo teskModel para excluir a vaga de emprego com o ID fornecido
    const tesk = teskModel.delete(id);
    return tesk
      .then((result) => res.status(200).send("<script> alert('Tarefa excluída com sucesso!'); window.location='../../tesk' </script>"))
      .catch((error) => res.status(400).send(error.message));  
  }
}

// Exporta uma instância da classe teskController para ser utilizada em outros arquivos do projeto
module.exports = new teskController();
