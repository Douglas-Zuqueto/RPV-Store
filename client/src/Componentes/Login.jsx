import React, { useState, useEffect, useContext } from "react";
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
  Alert,
} from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import { Link, Navigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import CompradorRepository from "../services/CompradorRepository";
import AppContext from "../context/AppContext";
import Utils from "../utils/Funcoes"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [compradores, setCompradores] = useState([]);
  const [loginError, setLoginError] = useState(false);
  const { setLogged } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const comprador = compradores.find(
      (comprador) => comprador.email === email && comprador.senha === password
    );

    if (comprador) {
      setLogged(true);
      setRedirect(true);
      Utils.setCookie('login',JSON.stringify(comprador));
      const getCookie = Utils.getCookie(JSON.stringify(comprador))
      console.log(getCookie)

    } else {
      setLoginError(true);
    }

    console.log("Dados de Login:", { email, password });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const compradoresBD = await CompradorRepository.getAllCompradores();
        setCompradores(compradoresBD);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  if (redirect) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, mt: 5 }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" align="center" gutterBottom>
            <Link to={"/"}>
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "150px", height: "auto", margin: "30px" }}
              />
            </Link>
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <AccountCircle sx={{ mr: 1, color: "action.active" }} />
            <TextField
              type="text"
              label="E-mail"
              required
              fullWidth
              color="success"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          {loginError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              E-mail ou senha incorretos.
            </Alert>
          )}
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
