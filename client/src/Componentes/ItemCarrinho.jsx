import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ItemCarrinho = () => {
  return (
    <Card sx={{ maxWidth: 300, display: "flex" }}>
      {/* Imagem do produto */}
      <img
        src="https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_1280.jpg"
        alt="Imagem do produto"
        style={{ width: "70px", height: "auto", objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="subtitle3" component="div">
          Título do Produto
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2" color="text.secondary">
            R$ 99,99
          </Typography>
          <IconButton
            aria-label="delete"
            color="error"
            sx={{ marginLeft: "auto",  }}
          >
            <DeleteForeverIcon style={{width:"20px"}}/>
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCarrinho;
