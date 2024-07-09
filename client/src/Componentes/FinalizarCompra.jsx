/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

// import { , Button,  } from "@material-ui";
import AppContext from "../context/AppContext";

export default function FinalizarCompra() {


  const { cartItems, setCartItems } = React.useContext(AppContext);

  React.useEffect(() => {
    const salvarCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (salvarCartItems.length > 0) {
      setCartItems(salvarCartItems);
    }
  }, [setCartItems]);

  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <Typography variant="h5"> Finalizar Compra </Typography>
      <Box sx={{ border: "2px solid grey" }}>IMAgem, preco e Nome</Box>
    </div>
  );
}
