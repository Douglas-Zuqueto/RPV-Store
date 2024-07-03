import * as React from "react";
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

export default function CarrinhoDeCompras() {
  const { cartItems } = React.useContext(AppContext);
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

  const totalCompra = cartItems.reduce((acc, item) => {
    return item.preco + acc;
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

        {cartItems.map((cartItem) => (
          <div key={cartItem.id}>
            <ListItem>
              <ItemCarrinho data={cartItem} />
            </ListItem>
            <Divider />
          </div>
        ))}

        <Divider />

        <Typography variant="h6" align="center">
          Total: {totalCompra}
        </Typography>
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
