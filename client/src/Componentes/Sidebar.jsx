import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Outlet, Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

// Componentes do Material-UI
import {
  AppBar,
  Box,
  Button,
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
} from "@mui/material";

import {
  Notifications as NotificationsIcon,
  MoreVert as MoreIcon,
  Apps as AppsIcon,
  FormatListBulleted as FormatListBulletedIcon,
  // Article as ArticleIcon,
  Help as HelpIcon,
  Info as InfoIcon,
  Pix as PixIcon,
  Home as HomeIcon
} from "@mui/icons-material";

import OutputIcon from "@mui/icons-material/Output";
import BarChartIcon from "@mui/icons-material/BarChart";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TableRowsIcon from "@mui/icons-material/TableRows";

// Componentes locais
import BarraDePesquisa from "./BarraDePesquisa";
import CarrinhoDeCompras from "./CarrinhoDeCompras";
import BotaoTema from "./BotaoTema";

// Imagem
import Logo from "../assets/Logo.png";
import AppContext from "../context/AppContext";

const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Produtos");

  const { logged, setLogged } = useContext(AppContext);

  const StyledBotao = {
    background: `linear-gradient(45deg, rgba(0, 151, 178), rgba(126, 217, 87))`,
    borderRadius: "8px",
    display: "flex",
    gap: "5px",
    alignItems: "center",
    padding: "8px",
    margin: "10px",
    color: "#FFFF",
  };

  // Estado para o menu mobile
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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
      <MenuItem onClick={handleMobileMenuClose}>
        <NotificationsIcon />
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <CarrinhoDeCompras />
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        {logged ? (
          <Button style={StyledBotao} onClick={() => setLogged(false)}>
            <OutputIcon />
            Sair
          </Button>
        ) : (
          <Link to={"/Login"} style={{ textDecoration: "none" }}>
            <Button style={StyledBotao}>
              <PersonIcon />
              Entrar
            </Button>
          </Link>
        )}
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
    let items = []
  if(fullName == 'Admin') {
     items = [
      { text: "Home", icon: <HomeIcon />, route: "/" },
      { text: "Produtos", icon: <TableRowsIcon />, route: "/TabelaProdutos" },
      {
        text: "Estoque",
        icon: <BarChartIcon />,
        route: "/estoque",
      },
      {
        text: "Adicionar Novo Produto",
        icon: <AddCircleIcon />,
        route: "/addNovoProduto",
      },
    ];
  }


  // Itens do menu lateral para o admin
  const itemsAdmin = [
    { text: "Home", icon: <HomeIcon />, route: "/" },
    { text: "Produtos", icon: <TableRowsIcon />, route: "/TabelaProdutos" },
    { text: "Estoque", icon: <BarChartIcon />, route: "/estoque" },
    { text: "Adicionar Novo Produto", icon: <AddCircleIcon />, route: "/addNovoProduto" },
    { text: "Dashboard", icon: <BarChartIcon />, route: "/dash" },

  ];

  // eslint-disable-next-line no-unused-vars
  const items = [
    { text: "Produtos", icon: <AppsIcon />, route: "/" },
    { text: "Categorias", icon: <FormatListBulletedIcon />, route: "/categorias" },
    { text: "Histórico", icon: <ArticleIcon />, route: "/historico" },
    { text: "Perguntas Frequentes", icon: <HelpIcon />, route: "/perguntasFrequentes" },
    { text: "Sobre", icon: <InfoIcon />, route: "/sobre" },
  ];


  // Estrutura do drawer
  const drawer = (
    <div style={{ margin: "0px", padding: "0px" }}>
      {/* Logo */}
      <div style={{ display: "flex", justifyContent: "center", padding: "0px" }}>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "150px", height: "auto", margin: "30px" }}
        />
      </div>
      <Divider />
      <List>
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
                background:
                  selectedItem === item.text
                    ? "linear-gradient(45deg, rgba(0, 151, 178), rgba(126, 217, 87))"
                    : "inherit",
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
    </div>
  );

  // Container para o drawer
  const container = window !== undefined ? () => window().document.body : undefined;

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
            <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
              <NotificationsIcon />
            </IconButton>
            {logged ? (
              <Button style={StyledBotao} onClick={() => setLogged(false)}>
                <OutputIcon />
                Sair
              </Button>
            ) : (
              <Link to={"/Login"} style={{ textDecoration: "none" }}>
                <Button style={StyledBotao}>
                  <PersonIcon />
                  Entrar
                </Button>
              </Link>
            )}
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
        {/* Drawer para modo mobile */}
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

        {/* Drawer para modo desktop */}
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
        <Outlet />
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;
