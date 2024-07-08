/* eslint-disable react/react-in-jsx-scope */

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

// import { , Button,  } from "@material-ui";
// import AppContext from "../context/AppContext";

export default function FinalizarCompra() {
  // const { cartItens } = useContext(AppContext);

  return (
    <div>
      <Typography variant="h5"> Finalizar Compra </Typography>
      <Box sx={{ border: "2px solid grey" }}>IMAgem, preco e Nome</Box>
    </div>
  );
}
