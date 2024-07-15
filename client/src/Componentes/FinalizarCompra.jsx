/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { Typography } from "@mui/material"; // Importa o componente Typography do Material UI para estilizar o texto
import Box from "@mui/material/Box"; // Importa o componente Box do Material UI

import AppContext from "../context/AppContext"; // Importa o contexto da aplicação

export default function FinalizarCompra() {
  const { cartItems, setCartItems } = React.useContext(AppContext); // Usa o contexto da aplicação para acessar e definir itens do carrinho

  React.useEffect(() => {
    // Efeito para carregar itens do carrinho do localStorage quando o componente é montado
    const salvarCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (salvarCartItems.length > 0) {
      setCartItems(salvarCartItems); // Define os itens do carrinho se houver itens salvos no localStorage
    }
  }, [setCartItems]); // O efeito depende de setCartItems

  React.useEffect(() => {
    // Efeito para salvar os itens do carrinho no localStorage sempre que o cartItems mudar
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]); 

  return (
    <div>
      <Typography variant="h5"> Finalizar Compra </Typography> // Renderiza um título para a página de finalização de compra
      <Box sx={{ border: "2px solid grey" }}>IMAgem, preco e Nome</Box> // Renderiza uma caixa com borda onde serão exibidos os detalhes dos itens do carrinho
    </div>
  );
}
