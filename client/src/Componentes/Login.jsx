import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import { Link ,  Navigate} from "react-router-dom";
import Logo from "../assets/Logo.png";
import CompradorRepository from "../services/CompradorRepository";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setredirect] = useState(false);
  const [produtos, setProdutos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setredirect(true);
    console.log("Dados de Login:", { username, password });
  };

  if (redirect) {
    return <Navigate to="/" replace={true} />;
  }

 
  
  useEffect(() => {
    async function fetchData() {
      try {
        const compradoresBD = await CompradorRepository.getAllCompradores()
        setProdutos(compradoresBD);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  },  [produtos, setProdutos]);

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, mt: 5 }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" align="center" gutterBottom>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "150px", height: "auto", margin: "30px" }}
            />
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <AccountCircle sx={{ mr: 1, color: "action.active" }} />
            <TextField
              type="text"
              label="E-mail"
              required
              fullWidth
              color="success"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Lock sx={{ mr: 1, color: "action.active" }} />
            <TextField
              type="password"
              label="Senha"
              color="success"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 2 }}
          >
            <Grid item>
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="Lembre de mim"
              />
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Esqueceu sua senha?
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="success"
            style={{
              background: `linear-gradient(45deg, rgba(0, 151, 178), rgba(126, 217, 87))`,
              borderRadius: "20px",
              display: "flex",
              padding: "8px",
              margin: "10px",
            }}
            fullWidth
          >
            Login
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Não tem uma conta? <Link to={"/Registrar"}>Registrar</Link>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
