import React, { useContext, useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Alert,
} from "@mui/material";
import {
  AccountCircle,
  Lock,
  Email,
  Phone,
  Fingerprint,
} from "@mui/icons-material";
import { Link, Navigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import CompradorRepository from "../services/CompradorRepository";
import AppContext from "../context/AppContext";

const Registrar = () => {
  // Estados para controle de alerta e redirecionamento
  const [showAlert, setShowAlert] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  // Estados para os campos do formulário
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [values, setValues] = useState({});

  // Acessa o nome do contexto e função para atualizar o nome
  const { nome, setNome } = useContext(AppContext);

  // Função de submit do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    setShowAlert(true); // Exibe o alerta de sucesso
    setTimeout(() => {
      setShowAlert(false);
      setRedirectToLogin(true); // Redireciona para a página de login
    }, 1000);

    console.log("Dados de Registro:", {
      nome,
      email,
      senha,
      telefone,
      cpf,
    });
  };

  // Redireciona para a página de login se o registro for bem-sucedido
  if (redirectToLogin) {
    return <Navigate to="/Login" replace={true} />;
  }

  // Função para atualizar valores dos campos
  const handleChangeValues = (values) => {
    setValues((prevValue) => ({
      ...prevValue,
      [values.target.name]: values.target.value,
    }));
  };

  // Função para criar um novo comprador no banco de dados
  const handleClickButton = () => {
    CompradorRepository.createComprador({
      nome: values.nome,
      email: values.email,
      senha: values.senha,
      telefone: values.telefone,
      cpf: values.cpf,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, mt: 5 }}>
        <form onSubmit={handleSubmit} onChange={handleChangeValues}>
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
              name="nome"
              label="Nome completo"
              required
              color="success"
              fullWidth
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Email sx={{ mr: 1, color: "action.active" }} />
            <TextField
              type="email"
              name="email"
              label="E-mail"
              color="success"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Lock sx={{ mr: 1, color: "action.active" }} />
            <TextField
              type="password"
              name="senha"
              label="Senha"
              color="success"
              required
              fullWidth
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Phone sx={{ mr: 1, color: "action.active" }} />
            <TextField
              type="tel"
              name="telefone"
              label="Telefone"
              color="success"
              fullWidth
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Fingerprint sx={{ mr: 1, color: "action.active" }} />
            <TextField
              type="text"
              name="cpf"
              label="CPF"
              color="success"
              fullWidth
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            style={{
              background: `linear-gradient(45deg, rgba(0, 151, 178), rgba(126, 217, 87))`,
              borderRadius: "20px",
              display: "flex",
              padding: "8px",
              margin: "10px",
            }}
            onClick={() => handleClickButton()}
            fullWidth
          >
            Registrar
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Já tem uma conta?
            <Link to={"/Login"}>Login</Link>
          </Typography>
        </form>
        {showAlert && (
          <div style={{ marginTop: 10 }}>
            <Alert severity="success">Registro concluído com sucesso!</Alert>
          </div>
        )}
      </Paper>
    </Container>
  );
};

export default Registrar;
