// import React from 'react'
import { useState } from "react";
import { TextField, Button, Grid, Paper } from "@mui/material";

export default function FormProdutos() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // addProduct({ name, price });
    // setName('');
    // setPrice('');
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <Paper elevation={3} style={{ padding: 20 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descrição"
              variant="outlined"
              fullWidth

              // value={price}
              // onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Preço"
              variant="outlined"
              fullWidth
              type="number"
              // value={price}
              // onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Imagem Selecionada"
              variant="outlined"
              fullWidth
              value={selectedFile ? selectedFile.name : ""}
              // InputProps={{
              //   readOnly: true,
              // }}
            />
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="image-upload-button"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="image-upload-button">
              <Button variant="outlined" component="span">
                Escolher Imagem
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Quantidade estoque"
              variant="outlined"
              fullWidth
              type="number"
              // value={price}
              // onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Categoria"
              variant="outlined"
              fullWidth
              // value={price}
              // onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Adicionar Produto
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
