import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";

function Categorias() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width="300px" 
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleNavigate("/categorias/masculinas")}
          sx={{ mr: 2 }}
        >
          Masculinas
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleNavigate("/categorias/femininas")}
        >
          Femininas
        </Button>
      </Box>
    </Box>
  );
}

export default Categorias;
