import { useState } from "react";
import { Button } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function BotaoTema() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Button onClick={toggleTheme}>
      {darkMode ? (
        <LightModeIcon sx={{ color: "green" }} />
      ) : (
        <DarkModeIcon sx={{ color: "green" }} />
      )}
    </Button>
  );
}

export default BotaoTema;
