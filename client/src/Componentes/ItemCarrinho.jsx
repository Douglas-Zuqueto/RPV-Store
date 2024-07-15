import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import propTypes from "prop-types"; // Importação do propTypes para definição de tipos
import AppContext from "../context/AppContext"; // Importação do contexto da aplicação

const ItemCarrinho = ({ data }) => {
  const { cartItems, setCartItems } = useContext(AppContext); // Uso do useContext para acessar o contexto da aplicação
  const { id, imagem, nome, preco } = data; // Destruturação das propriedades do item de dados passado como prop

  const handleRemoveItem = () => {
    const updatedItens = cartItems.filter((item) => item.id !== id); // Filtra os itens do carrinho, removendo o item atual pelo seu id
    setCartItems(updatedItens); // Atualiza o estado do carrinho com os itens filtrados
  };

  return (
    <Card sx={{ width: "100%", display: "flex" }}> {/* Cartão que envolve o item do carrinho */}
      {/* Imagem do produto */}
      <img
        src={imagem}
        alt={nome}
        style={{ width: "70px", height: "auto", objectFit: "cover" }} // Estilo da imagem
      />
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Typography variant="subtitle3" component="div">
          {nome} {/* Nome do produto */}
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {preco} {/* Preço do produto */}
          </Typography>
          <IconButton
            aria-label="delete"
            color="error" // Ícone de delete com cor vermelha
            sx={{ marginLeft: "auto" }} // Espaçamento à esquerda automático
            onClick={handleRemoveItem} // Função para remover o item ao clicar no ícone
          >
            <DeleteForeverIcon style={{ width: "20px" }} /> {/* Ícone de delete */}
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCarrinho;

ItemCarrinho.propTypes = {
  data: propTypes.object.isRequired, // Definição das propriedades esperadas para o objeto 'data'
};
