import React, { useState, useEffect, useRef, useContext } from "react"; // Importa hooks e contexto do React
import AppContext from "../context/AppContext"; // Importa o contexto da aplicação
import Alert from "@mui/material/Alert"; // Importa o componente de alerta do Material-UI
import { Typography } from "@mui/material"; // Importa o componente de tipografia do Material-UI
import Box from "@mui/material/Box"; // Importa o componente de caixa do Material-UI
import Divider from "@mui/material/Divider"; // Importa o componente de divisor do Material-UI
import Logo from "../assets/Logo.png"; // Importa a imagem do logo da aplicação
import { TextField, Grid } from "@mui/material"; // Importa componentes de campo de texto e grid do Material-UI
import { Link } from "react-router-dom"; // Importa o componente Link do React Router DOM
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"; // Importa o ícone de seta para voltar do Material-UI

function Checkout() {
  const [paid, setPaid] = useState(false); // Estado para controlar se o pagamento foi realizado
  const [loaded, setLoaded] = useState(false); // Estado para controlar se o script do PayPal foi carregado
  const paypalRef = useRef(); // Referência para o elemento do PayPal

  const { cartItems } = useContext(AppContext); // Obtém os itens do carrinho do contexto da aplicação

  // Calcula o total da compra com base nos itens do carrinho
  const totalCompra = cartItems.reduce((acc, item) => {
    return parseFloat(item.preco) + parseFloat(acc);
  }, 0);

  // Objeto de produto para o PayPal
  const product = {
    description: "", // Descrição do produto (atualmente vazio)
    price: totalCompra, // Preço total da compra
  };

  // Efeito para carregar o script do PayPal ao montar o componente
  useEffect(() => {
    const script = document.createElement("script"); // Cria um elemento de script dinamicamente
    const id =
      "AW_QUXlBCYfnXfO5CbDHYhZ1niqfYSZ9XEzw7hvGrq0QJlb5vXAbe6IZWYGVniYqrVup3-mlU9vgkMOt"; // ID do cliente do PayPal
    script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}`; // URL do script do PayPal com o ID do cliente e a moeda
    script.addEventListener("load", () => setLoaded(true)); // Adiciona um evento para marcar que o script foi carregado
    document.body.appendChild(script); // Adiciona o script ao corpo do documento HTML

    // Função de limpeza para remover o script do corpo do documento ao desmontar o componente
    return () => {
      script.removeEventListener("load", () => setLoaded(true)); // Remove o evento de carregamento do script
      document.body.removeChild(script); // Remove o elemento de script do corpo do documento
    };
  }, []); // Dependência vazia para garantir que o efeito seja executado apenas uma vez

  // Efeito para configurar e renderizar os botões do PayPal quando o script estiver carregado
  useEffect(() => {
    if (loaded) {
      function loadButtonsAndLogicAboutPayment() {
        setTimeout(() => {
          // Configura e renderiza os botões do PayPal
          window.paypal
            .Buttons({
              createOrder: (data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      description: product.description,
                      amount: {
                        currency_code: "BRL",
                        value: product.price,
                      },
                    },
                  ],
                });
              },
              onApprove: async (data, actions) => {
                const order = await actions.order.capture(); // Captura o pagamento aprovado
                setPaid(true); // Marca o pagamento como concluído
                console.log(order); // Exibe os detalhes do pedido no console
              },
            })
            .render(paypalRef.current); // Renderiza os botões do PayPal no elemento referenciado
        }, 200); // Tempo de espera antes de renderizar os botões (opcional)
      }
      loadButtonsAndLogicAboutPayment(); // Chama a função para carregar os botões do PayPal
    }
  }, [loaded, product.description, product.price]); // Dependências para atualizar o efeito quando o script estiver carregado ou os detalhes do produto mudarem

  // Estado para os dados do formulário de entrega
  const [formularioCep, setFormularioCep] = useState({
    nome: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    telefone: "",
  });

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormularioCep({
      ...formularioCep,
      [name]: value,
    });
  };

  // Função para lidar com o envio do formulário de entrega
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário
    // Lógica adicional de envio do formulário, se necessário
  };
  
  // Renderiza o conteúdo do componente Checkout

  return (
    <div
      style={{
        margin: "20px",
        border: "1px solid green",
        boxShadow: "0 10px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div>
        {paid ? (
          <div style={{ margin: "20px" }}>
            <Alert style={{ marginBottom: "20px" }} severity="success">
              Compra Finalizada com sucesso!
            </Alert>
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ArrowBackIosIcon />
              <small>Voltar para página principal</small>
            </Link>
          </div>
        ) : (
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "50px",
                alignContent: "center",
              }}
            >
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "90px", height: "auto", margin: "30px" }}
              />
              <Typography variant="h6"> Finalizar Compra </Typography>
            </div>

            <Divider />
            <Typography margin="10px" variant="h6" align="center">
              Resumo da Compra
            </Typography>
            <Divider />

            <Box
              margin="20px"
              padding={"20px"}
              sx={{ border: "1px dashed grey" }}
            >
              {cartItems.map((cartItem) => (
                <div key={cartItem.id}>
                  <img
                    src={cartItem.imagem}
                    alt={cartItem.nome}
                    loading="lazy"
                    width={"90px"}
                  />
                  <div>
                    <Typography margin="10px" variant="body2">
                      {cartItem.nome}
                    </Typography>
                    <Typography margin="10px" variant="body2">
                      {cartItem.descricao_detalhada}
                    </Typography>
                    <Typography margin="10px" variant="body2">
                      {cartItem.preco}
                    </Typography>
                  </div>
                </div>
              ))}

              <Typography variant="h5">
                Total da compra: R$ {product.price.toFixed(2)}
              </Typography>
            </Box>

            <Typography margin="50px" variant="h6">
              Dados de entrega
            </Typography>
            <form onSubmit={handleSubmit} style={{ margin: "50px" }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Nome"
                    name="nome"
                    value={formularioCep.nome}
                    onChange={handleChange}
                    required
                    color="success"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Endereço"
                    name="endereco"
                    value={formularioCep.endereco}
                    onChange={handleChange}
                    required
                    color="success"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Cidade"
                    name="cidade"
                    value={formularioCep.cidade}
                    onChange={handleChange}
                    required
                    color="success"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Estado"
                    name="estado"
                    value={formularioCep.estado}
                    onChange={handleChange}
                    required
                    color="success"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="CEP"
                    name="cep"
                    value={formularioCep.cep}
                    onChange={handleChange}
                    required
                    color="success"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Telefone"
                    name="telefone"
                    value={formularioCep.telefone}
                    onChange={handleChange}
                    required
                    color="success"
                  />
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
            </form>
            <Typography margin="50px" variant="h6">
              Forma de pagamento
              <div ref={paypalRef}></div>
              <div ref={paypalRef}></div>
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
