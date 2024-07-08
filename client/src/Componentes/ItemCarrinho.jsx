import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import propTypes from "prop-types";
import AppContext from "../context/AppContext";

const ItemCarrinho = ({ data }) => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, imagem, nome, preco } = data;

  const handleRemoveItem = () => {
    const updatedItens = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItens);
  };

  return (
    <Card sx={{ width: "100%", display: "flex" }}>
      {/* Imagem do produto */}
      <img
        src={imagem}
        alt={nome}
        style={{ width: "70px", height: "auto", objectFit: "cover" }}
      />
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Typography variant="subtitle3" component="div">
          {nome}
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {preco}
          </Typography>
          <IconButton
            aria-label="delete"
            color="error"
            sx={{ marginLeft: "auto" }}
            onClick={handleRemoveItem}
          >
            <DeleteForeverIcon style={{ width: "20px" }} />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCarrinho;

ItemCarrinho.propTypes = {
  data: propTypes.object,
}.isRequired;
