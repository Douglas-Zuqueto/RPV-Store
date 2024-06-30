// import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MessageIcon from "@mui/icons-material/Message";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import AppsIcon from "@mui/icons-material/Apps";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ArticleIcon from "@mui/icons-material/Article";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";

import Produto from "./Produto";
import BarraDePesquisa from "./BarraDePesquisa";
import CarrinhoDeCompras from "./CarrinhoDeCompras";
import Perfil from "./Perfil";
import BotaoTema from "./BotaoTema";
import FormProdutos from "./FormProdutos";
// import MenuLateral from "./MenuLateral";

import LogoBig from "../assets/LogoBig.png";
import Logo from "../assets/Logo.png";

// import { mainListItems, secondaryListItems } from "./ListaItens";

const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedContent, setSelectedContent] = useState("Produtos");

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Mensagens</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <CarrinhoDeCompras />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <Perfil />
      </MenuItem>
    </Menu>
  );

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleMenuClick = (content) => {
    setSelectedContent(content);
  };

  const items = [
    { text: "Produtos", icon: <AppsIcon /> },
    { text: "Categorias", icon: <FormatListBulletedIcon /> },
    { text: "Histórico", icon: <ArticleIcon /> },
    { text: "Contato", icon: <ContactPageIcon /> },
    { text: "Perguntas Frequentes", icon: <HelpIcon /> },
  ];

  const drawer = (
    <div
      style={{
        margin: "0px",
        padding: "0px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0px",
        }}
      >
        <img
          src={LogoBig}
          alt="Logo"
          style={{ width: "100px", height: "auto" }}
        />
      </div>

      <Toolbar />

      <Divider />
      <List>
        {" "}
        {items.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton button onClick={() => handleMenuClick(item.text)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {" "}
        {["Sair", "Sobre"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <LogoutIcon /> : <InfoIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <AppBar
        color=""
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "100px", height: "auto" }}
            />
          </IconButton>
          <BarraDePesquisa />

          <Box sx={{ flexGrow: 1 }} />
          <BotaoTema />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <CarrinhoDeCompras />

            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MessageIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Perfil />
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        {renderMobileMenu}
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {selectedContent === "Produtos" && <Produto />}
        {selectedContent === "Categorias" && (
          <>
            <Produto />
            <Produto />
            <Produto />
          </>
        )}
        {selectedContent === "Histórico" && <FormProdutos />}
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;
