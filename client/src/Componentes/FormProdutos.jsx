/* eslint-disable react/react-in-jsx-scope */
import React, { useContext, useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  MenuItem,
  Select,
  Alert,
} from "@mui/material";
import AppContext from "../context/AppContext";
import produtosRepository from "../services/produtosRepository";

export default function FormProdutos() {

  const [values, setValues] = useState();

const handleChangeValues = (values) => {
  console.log(values);
  setValues((prevValue) => ({
    ...prevValue,
    [values.target.name]: values.target.value,
  }))
};

const handleClickButton = () => {
  produtosRepository.createProdutos({
    nome: values.nome,
    preco: values.preco,
    descricao_detalhada: values.descricao_detalhada,
    imagem: "imagem",
    qnt_estoque: values.qnt_estoque,
    categoria_id: values.categoria_id, 
  }).then((response) => {
    console.log(response);
  })
}

  const {
    selectedFile,
    setSelectedFile,
    nome,
    setNome,
    descricao,
    setDescricao,
    preco,
    setPreco,
    quantidade,
    setQuantidade,
    categoria,
    setCategoria,
    produtos,
    setProdutos,
  } = useContext(AppContext);

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData")) || {};
    setNome(storedFormData.nome || "");
    setDescricao(storedFormData.descricao || "");
    setPreco(storedFormData.preco || "");
    setQuantidade(storedFormData.quantidade || "");
    setCategoria(storedFormData.categoria || "");
    setSelectedFile(null);
  }, []);

  useEffect(() => {
    const formData = {
      nome,
      descricao,
      preco,
      quantidade,
      categoria,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [nome, descricao, preco, quantidade, categoria]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Por favor, selecione uma imagem para o produto.");
      return;
    }

    const novoProduto = {
      id: crypto.randomUUID(),
      nome: nome,
      descricao: descricao,
      preco: preco,
      quantidade: quantidade,
      categoria: categoria,
      imagem: selectedFile.name,
    };

    setProdutos([...produtos, novoProduto]);

    setSelectedFile(null);
    setNome("");
    setDescricao("");
    setPreco("");
    setQuantidade("");
    setCategoria("");

    localStorage.removeItem("formData");

    setShowAlert(true); // Mostra o alerta de sucesso
    setTimeout(() => {
      setShowAlert(false); // Esconde o alerta após 3 segundos
    }, 3000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: 20 }}>
      <form onSubmit={handleSubmit} onChange={handleChangeValues}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nome"
              name="nome"
              variant="outlined"
              fullWidth
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              color="success"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              color="success"
              label="Descrição"
              name="descricao_detalhada"
              variant="outlined"
              fullWidth
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
             color="success"
              label="Preço"
              name="preco"
              variant="outlined"
              fullWidth
              type="number"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              color="success"
              label="Imagem Selecionada"
              name="imagem"
              variant="outlined"
              fullWidth
              value={selectedFile ? selectedFile.name : ""}
              InputProps={{
                readOnly: true,
              }}
              required
            />
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="image-upload-button"
              type="file"
              onChange={handleFileChange}
              required
            />
            <label htmlFor="image-upload-button">
              <Button variant="outlined" component="span" color="success">
                Escolher Imagem
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <TextField
              color="success"
              label="Quantidade estoque"
              name="qnt_estoque"
              variant="outlined"
              fullWidth
              type="number"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Select
              label="Categoria"
              name="categoria_id"
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              fullWidth
              required
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              color="success"
            >
              <MenuItem value={1}>Categoria 1</MenuItem>
              <MenuItem value={2}>Categoria 2</MenuItem>
              <MenuItem value={3}>Categoria 3</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="success" onClick={() => handleClickButton()}>
              Adicionar Produto
            </Button>
          </Grid>
        </Grid>
      </form>

      {showAlert && (
        <div style={{ marginTop: 10 }}>
          <Alert severity="success">Produto adicionado com sucesso!</Alert>
        </div>
      )}
    </Paper>
  );
}
