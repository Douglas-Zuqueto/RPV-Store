import React, { useState, useEffect } from "react";
import Chat from '../Componentes/Chat';
import produtosRepository from "../services/produtosRepository";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import Modal from '@mui/material/Modal';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function TabelaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentProduto, setCurrentProduto] = useState({ id: '', nome: '', descricao: '', preco: '' });

  useEffect(() => {
    async function fetchData() {
      try {
        const produtosBD = await produtosRepository.getAllProdutos();
        setProdutos(produtosBD);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const handleOpen = (produto) => {
    setCurrentProduto(produto);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentProduto({ id: '', nome: '', descricao: '', preco: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduto({ ...currentProduto, [name]: value });
  };

  const handleEdit = async () => {
    try {
      await produtosRepository.updateProdutos(currentProduto.id, currentProduto);
      setProdutos((prevProdutos) =>
        prevProdutos.map((produto) =>
          produto.id === currentProduto.id ? currentProduto : produto
        )
      );
      handleClose();
    } catch (error) {
      console.error('Erro', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await produtosRepository.deleteProduto(id);
      setProdutos((prevProdutos) =>
        prevProdutos.filter((produto) => produto.id !== id)
      );
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center" gutterBottom>
            Lista de Produtos
          </Typography>
        </Grid>

        {produtos.length > 0 && (
          <Grid item xs={12}>
            <TableContainer component={Paper} style={{ marginTop: 20 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Descrição</TableCell>
                    <TableCell align="right">Preço</TableCell>
                    <TableCell align="right">Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {produtos.map((produto) => (
                    <TableRow key={produto.id}>
                      <TableCell>{produto.id}</TableCell>
                      <TableCell>{produto.nome}</TableCell>
                      <TableCell>{produto.descricao}</TableCell>
                      <TableCell align="right">{produto.preco}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          color="primary"
                          onClick={() => handleOpen(produto)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          color="error"
                          onClick={() => handleDelete(produto.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        )}

        <Grid item xs={12}>
          <Chat />
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div style={{ padding: 20, background: 'white', margin: '10% auto', width: '50%' }}>
          <Typography id="modal-title" variant="h6" component="h2">
            Editar Produto
          </Typography>
          <form>
            <TextField
              margin="normal"
              fullWidth
              label="Nome"
              name="nome"
              value={currentProduto.nome}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Descrição"
              name="descricao"
              value={currentProduto.descricao}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Preço"
              name="preco"
              value={currentProduto.preco}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Quantidade"
              name="quantidade"
              value={currentProduto.quantidade}
              onChange={handleChange}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleEdit}
              style={{ marginTop: 20 }}
            >
              Salvar
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default TabelaProdutos;
