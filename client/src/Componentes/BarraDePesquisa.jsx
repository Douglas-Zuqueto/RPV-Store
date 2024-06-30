// import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

const StyledInputBase = styled(InputBase)(() => ({
  color: "black",
  padding: "0px 8px",
  // transition: "border-color 0.3s ease",

  // "&:hover": {
  //   background: `linear-gradient(45deg, rgba(0, 151, 178, 0.1), rgba(126, 217, 87, 0.1))`,
  // },
}));

const temaDiv = {
  display: "flex",
  alignItems: "center",
  padding: "6px",
  borderRadius: "10px",
  border: "1px solid rgba(126, 217, 87)",
};

function BarraDePesquisa() {
  return (
    <div style={temaDiv}>
      <SearchIcon />
      <StyledInputBase placeholder="Pesquise aqui" />
    </div>
  );
}

export default BarraDePesquisa;
