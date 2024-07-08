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
  const [showAlert, setShowAlert] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [values, setValues] = useState();

  const { fullName, setFullName } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setRedirectToLogin(true);
    }, 1000);

    console.log("Dados de Registro:", {
      fullName,
      email,
      password,
      phone,
      cpf,
    });
  };

  if (redirectToLogin) {
    return <Navigate to="/Login" replace={true} />;
  }

  const handleChangeValues = (values) => {
    console.log(values);
    setValues((prevValue) => ({
      ...prevValue,
      [values.target.name]: values.target.value,
    }));
  };

  const handleClickButton = () => {
    CompradorRepository.createComprador({
      nome: values.fullName,
      email: values.email,
      senha: values.password,
      telefone: values.phone,
      cpf: values.cpf,
    }).then((response) => {
      console.log(response);
    });

    console.log(values);
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
              label="Nome completo"
              required
              color="success"
              fullWidth
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Email sx={{ mr: 1, color: "action.active" }} />
            <TextField
              type="email"
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
              label="Senha"
              color="success"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Phone sx={{ mr: 1, color: "action.active" }} />
            <TextField
              type="tel"
              label="Telefone"
              color="success"
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Fingerprint sx={{ mr: 1, color: "action.active" }} />
            <TextField
              type="text"
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
