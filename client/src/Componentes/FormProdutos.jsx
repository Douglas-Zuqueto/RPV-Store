/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  MenuItem,
  Select,
} from "@mui/material";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function FormProdutos() {
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

  const navigate = useNavigate();

  // Efeito para carregar dados do localStorage ao inicializar o componente
  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData")) || {};
    setNome(storedFormData.nome || "");
    setDescricao(storedFormData.descricao || "");
    setPreco(storedFormData.preco || "");
    setQuantidade(storedFormData.quantidade || "");
    setCategoria(storedFormData.categoria || "");
    setSelectedFile(null); // Limpar o arquivo selecionado ao carregar
  }, []);

  // Efeito para salvar dados no localStorage ao atualizar o estado
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

    const novoProduto = {
      id: crypto.randomUUID(),
      nome: nome,
      descricao: descricao,
      preco: preco,
      quantidade: quantidade,
      categoria: categoria,
      imagem: selectedFile ? selectedFile.name : "",
    };

    console.log("dados", produtos);
    setProdutos([ ...produtos, novoProduto]);

    setSelectedFile(null);
    setNome("");
    setDescricao("");
    setPreco("");
    setQuantidade("");
    setCategoria("");

    // Limpar o localStorage após o envio
    localStorage.removeItem("formData");

    navigate("/");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
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
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descrição"
              variant="outlined"
              fullWidth
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Preço"
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
              label="Imagem Selecionada"
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
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Select
              label="Categoria"
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              fullWidth
              required
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <MenuItem value={1}>Categoria 1</MenuItem>
              <MenuItem value={2}>Categoria 2</MenuItem>
              <MenuItem value={3}>Categoria 3</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="success">
              Adicionar Produto
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
