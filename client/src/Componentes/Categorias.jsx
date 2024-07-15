import React from "react"; // Importa a biblioteca React
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate do React Router
import { Button, Box } from "@mui/material"; // Importa os componentes Button e Box do Material-UI
import Chat from '../Componentes/Chat' // Importa o componente Chat

// Função principal do componente Categorias
function Categorias() {
  const navigate = useNavigate(); // Inicializa o hook useNavigate para navegação programática

  // Função para navegar para a rota especificada
  const handleNavigate = (path) => {
    navigate(path); // Navega para a rota fornecida
  };

  return (
    <>
      {/* Caixa principal que centraliza o conteúdo na tela */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh" 
      >
        {/* Caixa interna que contém os botões */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="300px"
        >
          {/* Botão para navegar para a categoria "Masculinas" */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleNavigate("/categorias/masculinas")}
            sx={{ mr: 2 }} 
          >
            Masculinas
          </Button>
          {/* Botão para navegar para a categoria "Femininas" */}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleNavigate("/categorias/femininas")}
          >
            Femininas
          </Button>
        </Box>
      </Box>
      <Chat />
    </>
  );
}

export default Categorias; 
