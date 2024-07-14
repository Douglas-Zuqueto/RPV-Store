/* eslint-disable react/react-in-jsx-scope */
import { useState, useContext } from "react"; // Importa useState e useContext do React
import SearchIcon from "@mui/icons-material/Search"; // Importa o ícone de pesquisa do Material UI
import InputBase from "@mui/material/InputBase"; // Importa o componente de entrada base do Material UI
import { styled } from "@mui/material/styles"; // Importa a função de estilização do Material UI
import { Button } from "@mui/material"; // Importa o componente Button do Material UI

// Estiliza o componente InputBase com cores e espaçamento personalizado
const StyledInputBase = styled(InputBase)(() => ({
  color: "black",
  padding: "0px 8px",
}));

// Estilo para a div que contém a barra de pesquisa
const temaDiv = {
  display: "flex",
  alignItems: "center",
  padding: "6px",
  borderRadius: "10px",
  border: "1px solid rgba(126, 217, 87)",
};

function BarraDePesquisa() {
  const [searchValue, setSearchValue] = useState(""); // Estado para armazenar o valor de pesquisa

  const handleSearch = (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário ao submeter
    setSearchValue(""); // Reseta o valor da pesquisa
    alert("teste"); // Exibe um alerta de teste (pode ser substituído pela lógica de pesquisa real)
  };

  return (
    <form style={temaDiv} onSubmit={handleSearch}> {/* Formulário com estilo aplicado */}
      <StyledInputBase
        value={searchValue} // Valor atual do campo de pesquisa
        placeholder="Pesquise aqui" // Texto de placeholder
        onChange={({ target }) => setSearchValue(target.value)} // Atualiza o estado ao digitar
        required // Torna o campo obrigatório
      />
      <Button type="submit" style={{ color: "black" }}> {/* Botão de submissão do formulário */}
        <SearchIcon /> {/* Ícone de pesquisa dentro do botão */}
      </Button>
    </form>
  );
}

export default BarraDePesquisa; 
