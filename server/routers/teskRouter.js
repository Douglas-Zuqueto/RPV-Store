// Importa o módulo Router do framework Express
const Router = require("express").Router;

// Cria uma instância de um roteador do Express
// O roteador é usado para definir rotas e manipular requisições HTTP em uma aplicação Express
const router = Router();

// ----------------------------------------------------------------------------------------------
// Métodos HTTP para fazer as requisições
// ----------------------------------------------------------------------------------------------

// Importa o controlador de vagas de emprego
const teskController = require("../controllers/teskController");

// Define uma rota GET para visualizar o formulário de criação de uma nova vaga de emprego
router.get("/tesk/create", teskController.viewCreate);

// Define uma rota POST para criar uma nova vaga de emprego
// Quando uma solicitação POST é feita para "/tesk", o método create() do controlador de vagas de emprego é chamado
router.post("/tesk", teskController.create);

// Define uma rota GET para visualizar a lista de todas as vagas de emprego
router.get("/", teskController.viewRead);

// Define uma rota GET para listar todas as vagas de emprego
// Quando uma solicitação GET é feita para "/tesk", o método readList() do controlador de vagas de emprego é chamado
router.get("/tesk", teskController.readList);

// Define uma rota GET para ler uma vaga de emprego específica por ID
// Quando uma solicitação GET é feita para "/tesk/:id", o método read() do controlador de vagas de emprego é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da vaga de emprego
router.get("/tesk/:id", teskController.read);

// Define uma rota GET para visualizar o formulário de atualização de uma vaga de emprego existente
router.get("/tesk/update/:id", teskController.viewUpdate);

// Define uma rota POST para atualizar uma vaga de emprego existente por ID
// Quando uma solicitação POST é feita para "/tesk/:id", o método update() do controlador de vagas de emprego é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da vaga de emprego
router.post("/tesk/:id", teskController.update);

// Define uma rota GET para realizar a exclusão de uma vaga de emprego existente
router.get("/tesk/delete/:id", teskController.delete);

// Define uma rota DELETE para excluir uma vaga de emprego existente por ID
// Quando uma solicitação DELETE é feita para "/tesk/:id", o método delete() do controlador de vagas de emprego é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da vaga de emprego
router.delete("/tesk/:id", teskController.delete);

// Exporta o objeto router (roteador)
// O roteador contém definições de rotas e controles para as diferentes solicitações HTTP.
module.exports = router;
