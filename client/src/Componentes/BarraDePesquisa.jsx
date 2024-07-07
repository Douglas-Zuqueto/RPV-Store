/* eslint-disable react/react-in-jsx-scope */
import { useState, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const StyledInputBase = styled(InputBase)(() => ({
  color: "black",
  padding: "0px 8px",
}));

const temaDiv = {
  display: "flex",
  alignItems: "center",
  padding: "6px",
  borderRadius: "10px",
  border: "1px solid rgba(126, 217, 87)",
  // "&:hover": {
  //   border: `10px solid linear-gradient(45deg, rgba(0, 151, 178, 0.1), rgba(126, 217, 87, 0.1))`,
  // },
};

function BarraDePesquisa() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário
    setSearchValue("");
    alert("teste");
  };

  return (
    <form style={temaDiv} onSubmit={handleSearch}>
      <StyledInputBase
        value={searchValue}
        placeholder="Pesquise aqui"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <Button type="submit" style={{ color: "black" }}>
        <SearchIcon />
      </Button>
    </form>
  );
}

export default BarraDePesquisa;
