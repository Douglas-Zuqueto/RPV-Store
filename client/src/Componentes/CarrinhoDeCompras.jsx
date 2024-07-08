import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import ItemCarrinho from "./ItemCarrinho";
import AppContext from "../context/AppContext";

import { Link } from "react-router-dom";

export default function CarrinhoDeCompras() {
  const { cartItems, logged } = React.useContext(AppContext);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  let totalCompra = cartItems.reduce((acc, item) => {
    return parseFloat(item.preco) + parseFloat(acc);
  }, 0);

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Typography variant="h6" align="center">
          SACOLA
        </Typography>

        <Divider />

        {cartItems.length === 0 ? (
          <Typography variant="body1" align="center">
            Seu carrinho está vazio.
          </Typography>
        ) : (
          cartItems.map((cartItem) => (
            <div key={cartItem.id}>
              <ListItem>
                <ItemCarrinho data={cartItem} />
              </ListItem>
              <Divider />
            </div>
          ))
        )}

        <Divider />

        <Typography variant="h6" align="center">
          Total: {totalCompra.toFixed(2)}
        </Typography>
        <Link to={logged ? "/FinalizarCompra" : "/Login"}>
          <Button>Finalizar Compra</Button>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>
        <IconButton
          size="large"
          aria-label="show shopping cart"
          color="inherit"
        >
          <Badge badgeContent={cartItems.length} color="error">
            <ShoppingCartIcon sx={{ color: "black" }} />
          </Badge>
        </IconButton>
      </Button>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
