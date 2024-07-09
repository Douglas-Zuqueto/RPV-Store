import React, { useState, useEffect, useRef, useContext } from "react";
import AppContext from "../context/AppContext";
import Alert from "@mui/material/Alert";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Logo from "../assets/Logo.png";
import { TextField, Grid } from "@mui/material";

function Checkout() {
  const [paid, setPaid] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const paypalRef = useRef();

  const { cartItems } = useContext(AppContext);

  const totalCompra = cartItems.reduce((acc, item) => {
    return parseFloat(item.preco) + parseFloat(acc);
  }, 0);

  const product = {
    description: "",
    price: totalCompra,
  };

  useEffect(() => {
    const script = document.createElement("script");
    const id =
      "AW_QUXlBCYfnXfO5CbDHYhZ1niqfYSZ9XEzw7hvGrq0QJlb5vXAbe6IZWYGVniYqrVup3-mlU9vgkMOt";
    script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}`;
    script.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", () => setLoaded(true));
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (loaded) {
      function loadButtonsAndLogicAboutPayment() {
        setTimeout(() => {
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
                const order = await actions.order.capture();
                setPaid(true);
                console.log(order);
              },
            })
            .render(paypalRef.current);
        }, 200);
      }
      loadButtonsAndLogicAboutPayment();
    }
  }, [loaded, product.description, product.price]);

  const [formularioCep, setFormularioCep] = useState({
    nome: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    telefone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormularioCep({
      ...formularioCep,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
          <div style={{ marginTop: 10 }}>
            <Alert severity="success">Compra Finalizada com sucesso!</Alert>
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
