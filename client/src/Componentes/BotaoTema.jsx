/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react"; // Importa o hook useState do React
import { Button } from "@mui/material"; // Importa o componente Button do Material-UI
import DarkModeIcon from "@mui/icons-material/DarkMode"; // Importa o ícone DarkMode do Material-UI
import LightModeIcon from "@mui/icons-material/LightMode"; // Importa o ícone LightMode do Material-UI

// Função principal do componente BotaoTema
function BotaoTema() {
  // Define o estado inicial para o modo escuro (dark mode)
  const [darkMode, setDarkMode] = useState(false);

  // Função para alternar entre os modos claro e escuro
  const toggleTheme = () => {
    setDarkMode(!darkMode); // Inverte o valor atual do estado darkMode
  };

  return (
    <Button onClick={toggleTheme} aria-label="Toggle dark mode"> {/* Botão que alterna o tema */}
      {darkMode ? ( // Verifica se o modo escuro está ativado
        <LightModeIcon sx={{ color: 'var(--verde-)' }} /> // Se estiver, mostra o ícone de modo claro com a cor verde
      ) : (
        <DarkModeIcon sx={{ color: 'var(--roxo-)' }} /> // Se não estiver, mostra o ícone de modo escuro com a cor roxa
      )}
    </Button>
  );
}

export default BotaoTema; 
