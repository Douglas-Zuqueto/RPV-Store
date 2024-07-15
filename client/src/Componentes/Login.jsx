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
} from "@mui/material"; // Importações de componentes do Material-UI
import { AccountCircle, Lock } from "@mui/icons-material"; // Ícones do Material-UI
import { Link, Navigate } from "react-router-dom"; // Componentes de roteamento do React Router
import Logo from "../assets/Logo.png"; // Importação do logo da aplicação
import CompradorRepository from "../services/CompradorRepository"; // Importação do serviço de repositório de compradores
import AppContext from "../context/AppContext"; // Contexto da aplicação
import Utils from "../utils/Funcoes"; // Funções utilitárias

const Login = () => {
  const [email, setEmail] = useState(""); // Estado para armazenar o e-mail do usuário
  const [password, setPassword] = useState(""); // Estado para armazenar a senha do usuário
  const [redirect, setRedirect] = useState(false); // Estado para controlar o redirecionamento após o login
  const [compradores, setCompradores] = useState([]); // Estado para armazenar a lista de compradores
  const [loginError, setLoginError] = useState(false); // Estado para indicar erro de login
  const { setLogged } = useContext(AppContext); // Contexto da aplicação para controlar se o usuário está logado


  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    // Verifica se existe um comprador com o e-mail e senha fornecidos
    const comprador = compradores.find(
      (comprador) => comprador.email === email && comprador.senha === password
    );

    if (comprador) { // Se encontrar o comprador
      setLogged(true); // Define o usuário como logado no contexto da aplicação
      setRedirect(true); // Ativa o redirecionamento para a página inicial
      Utils.setCookie('login',JSON.stringify(comprador)); // Define um cookie com os dados do comprador
      const getCookie = Utils.getCookie(JSON.stringify(comprador)) // Verifica se o cookie foi criado com sucesso
      console.log(getCookie) // Imprime o resultado do cookie criado


    } else { // Se não encontrar o comprador
      setLoginError(true); // Ativa o estado de erro de login
    }

    console.log("Dados de Login:", { email, password }); // Imprime os dados de login no console
  };

  useEffect(() => {
    async function fetchData() { // Função assíncrona para buscar os compradores do banco de dados
      try {
        const compradoresBD = await CompradorRepository.getAllCompradores(); // Obtém todos os compradores
        setCompradores(compradoresBD); // Atualiza o estado dos compradores com os dados obtidos
      } catch (error) {
        console.error("Error fetching data:", error); // Trata erros de busca de dados
      }
    }

    fetchData(); // Chama a função para buscar os compradores ao montar o componente
  }, []); // Array vazio garante que o useEffect execute apenas uma vez, após a montagem inicial do componente

  if (redirect) { // Se o redirecionamento estiver ativo
    return <Navigate to="/" replace={true} />; // Redireciona o usuário para a página inicial
  }

  return (
    <Container maxWidth="xs"> {/* Container com largura máxima de xs (extra small) */}
      <Paper elevation={3} sx={{ padding: 3, mt: 5 }}> {/* Papel com elevação e estilos de espaçamento e margem superior */}
        <form onSubmit={handleSubmit}> {/* Formulário que chama a função handleSubmit ao ser enviado */}
          <Typography variant="h5" align="center" gutterBottom> {/* Título principal do formulário */}
            <Link to={"/"}> {/* Link para a página inicial */}
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "150px", height: "auto", margin: "30px" }} // Estilo do logo da aplicação
              />
            </Link>
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}> {/* Container flexível com alinhamento vertical */}
            <AccountCircle sx={{ mr: 1, color: "action.active" }} /> {/* Ícone de conta de usuário */}
            <TextField
              type="text"
              label="E-mail"
              required
              fullWidth
              color="success"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do e-mail conforme digitado pelo usuário
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}> {/* Container flexível com alinhamento vertical */}
            <Lock sx={{ mr: 1, color: "action.active" }} /> {/* Ícone de cadeado */}
            <TextField
              type="password"
              label="Senha"
              color="success"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha conforme digitado pelo usuário
            />
          </Box>
          {loginError && ( // Se houver erro de login, exibe um alerta
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
            <Grid item> {/* Item do grid para exibir a opção "Lembre de mim" */}
              <FormControlLabel
                control={<Checkbox color="success" />} // Checkbox com cor de sucesso
                label="Lembre de mim"
              />
            </Grid>
            <Grid item> {/* Item do grid com link para "Esqueceu sua senha?" */}
              <Link href="#" variant="body2">
                Esqueceu sua senha?
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="success"
            style={{ // Estilo do botão de login
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
            Não tem uma conta? <Link to={"/Registrar"}>Registrar</Link> {/* Link para a página de registro */}
          </Typography>
        </form>
      </Paper>
    </Container>
  );
};

export default Login; // Exporta o componente Login como padrão para ser utilizado em outros arquivos
