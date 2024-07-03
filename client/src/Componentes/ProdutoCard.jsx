/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Rating,
  Divider,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import formatCurrency from "../utils/formatCurrency";
import AppContext from "../context/AppContext";

function ProdutoCard({ data }) {
  const { nome, selectedFile, preco } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([...cartItems, data]);

  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          height="150"
          image={selectedFile}
          alt={nome}
        />
        <CardContent>
          <Divider />
          <Typography variant="h6">{nome}</Typography>
          <Typography variant="body2" color="textSecondary">
            {formatCurrency(preco, 'BRL')}
          </Typography>
          <Divider />
          <Rating defaultValue={1} size="small" />
          <Divider />
          <Button
            variant="contained"
            color="success"
            startIcon={<AddShoppingCartIcon />}
            onClick={handleAddCart}
          >
            Adicionar ao Carrinho
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

ProdutoCard.propTypes = {
  data: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProdutoCard;
