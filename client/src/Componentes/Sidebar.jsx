/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Outlet, Link } from "react-router-dom";

// Componentes do Material-UI
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Badge,
} from "@mui/material";

import {
  ShoppingCart as ShoppingCartIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreIcon,
  Message as MessageIcon,
  Apps as AppsIcon,
  FormatListBulleted as FormatListBulletedIcon,
  Article as ArticleIcon,
  ContactPage as ContactPageIcon,
  Help as HelpIcon,
  Logout as LogoutIcon,
  Info as InfoIcon,
} from "@mui/icons-material";

// Componentes locais
import BarraDePesquisa from "./BarraDePesquisa";
import CarrinhoDeCompras from "./CarrinhoDeCompras";
import Perfil from "./Perfil";
import BotaoTema from "./BotaoTema";
// import FormProdutos from "./FormProdutos";
// import Produtos from "./Produtos";

// Imagem
import Logo from "../assets/Logo.png";
import Categorias from "./Categorias";
import PerguntasFrequentes from "./PerguntasFrequentes";

const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Produtos");
  // const [selectedContent, setSelectedContent] = useState("Produtos");
  // const navigate = useNavigate();

  // Estado para o menu mobile
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // Funções para abrir e fechar o menu mobile
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (text) => {
    setSelectedItem(text);
  };

  // Renderização do menu mobile
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
      {/* Itens do menu mobile */}
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <ShoppingCartIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <CarrinhoDeCompras />
        <p>Carrinho</p>
      </MenuItem>
      <MenuItem>
        <Perfil />
      </MenuItem>
    </Menu>
  );

  // Funções para fechar e transição do drawer
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

  // Itens do menu lateral
  const items = [
    { text: "Produtos", icon: <AppsIcon />, route: "/" },
    {
      text: "Categorias",
      icon: <FormatListBulletedIcon />,
      route: "/categorias",
    },
    { text: "Histórico", icon: <ArticleIcon />, route: "/historico" },
    { text: "Contato", icon: <ContactPageIcon />, route: "/contato" },
    { text: "Perguntas Frequentes", icon: <HelpIcon />, route: "/perguntasFrequentes" },
    { text: "Sobre", icon: <InfoIcon />, route: "/sobre" },
  ];

  // Estrutura do drawer
  const drawer = (
    <div style={{ margin: "0px", padding: "0px" }}>
      {/* Logo */}
      <div
        style={{ display: "flex", justifyContent: "center", padding: "0px" }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "150px", height: "auto", margin: "30px" }}
        />
      </div>
      <Divider />
      <List>
        {/* Renderização dos itens do menu */}
        {items.map((item) => (
          <ListItem key={item.text} disablePadding style={{ width: "100%" }}>
            <Link
              to={item.route}
              onClick={() => handleMenuClick(item.text)}
              style={{
                paddingLeft: "10px",
                width: "100%",
                textDecoration: "none",
                color: "inherit",
                background: selectedItem === item.text ? 'linear-gradient(45deg, rgba(0, 151, 178), rgba(126, 217, 87))' : 'inherit',
              }}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {/* Renderização dos itens finais do drawer */}
        {["Sair", "Sobre"].map((text, index) => (
          <Link
            to={text === "Sair" ? "/logout" : "/sobre"}
            onClick={() => handleMenuClick(text)}
            style={{
              paddingLeft: "10px",
              width: "100%",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? <LogoutIcon /> : <InfoIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );


  // Container para o drawer
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* Barra de navegação superior */}
      <AppBar
        color=""
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          {/* Botão para abrir o drawer no modo mobile */}
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
              <NotificationsIcon />
            </IconButton>
            <Perfil />
          </Box>
          {/* Ícone de mais opções no modo mobile */}
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
          ModalProps={{ keepMounted: true }}
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
      {/* Conteúdo principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* Renderização do conteúdo com base no item selecionado */}
        {/* {selectedContent === "Produtos" && <Produtos />}
        {selectedContent === "Categorias" && navigate("/historico")}
        {selectedContent === "Histórico" && <FormProdutos />} */}
        <Outlet />
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;
