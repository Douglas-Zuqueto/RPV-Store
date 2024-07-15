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
import AppContext from "../context/AppContext";  // Importa o contexto da aplicação

function ProdutoCard({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext);  // Usa o contexto para acessar e atualizar o carrinho

  // Função para adicionar o produto ao carrinho
  const handleAddCart = () => setCartItems([...cartItems, data]);
  const imagem = data.imagem;  // Atribui a imagem do produto a uma variável

  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          height="150"
          image={imagem}
          src={imagem}
          alt={data.nome}  // Define a imagem do produto
        />
        <CardContent>
          <Divider />  {/* Adiciona uma linha divisória */}
          <Typography variant="h6">{data.nome}</Typography>  {/* Exibe o nome do produto */}
          <Typography variant="body2" color="textSecondary">
            {data.preco}  {/* Exibe o preço do produto */}
          </Typography>
          <Divider />  {/* Adiciona outra linha divisória */}
          <Rating defaultValue={1} size="small" />  {/* Exibe uma avaliação com estrelas */}
          <Divider />  {/* Adiciona mais uma linha divisória */}
          <Button
            variant="contained"
            color="success"
            startIcon={<AddShoppingCartIcon />}
            onClick={handleAddCart}  // Adiciona o produto ao carrinho quando o botão é clicado
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
  }).isRequired,  // Define as propriedades esperadas e seus tipos
};

export default ProdutoCard;
