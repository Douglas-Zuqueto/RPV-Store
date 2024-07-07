import React from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Sobre() {
  const sobreStyles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      maxWidth: "800px",
      margin: "0 auto",
    },
    heading: {
      textAlign: "center",
      color: "#0097B2",
      marginBottom: "20px",
    },
    paragraph: {
      textAlign: "justify",
      marginBottom: "20px",
      lineHeight: "1.6",
    },
    list: {
      listStyleType: "none",
      padding: "0",
    },
    listItem: {
      backgroundColor: "#f5f5f5",
      padding: "12px",
      borderRadius: "5px",
      marginBottom: "10px",
      display: "flex",
      alignItems: "center",
    },
    listItemIcon: {
      minWidth: "auto",
      marginRight: "10px",
      color: "#7ED957",
    },
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, background: "#ffffff" }}>
        <Typography variant="h2" align="center" sx={{ color: "#0097B2", mb: 4 }}>
          Sobre
        </Typography>

        <Typography variant="body1" sx={{ ...sobreStyles.paragraph, mb: 4 }}>
          A RPV Store foi fundada em 2024 visando dar uma nova vida às roupas e promover a moda sustentável. Desde o início, nosso foco tem sido oferecer peças únicas e de qualidade, enquanto reduzimos o impacto ambiental.
        </Typography>

        <Typography variant="body1" sx={sobreStyles.paragraph}>
          Nossa missão é proporcionar uma experiência de compra única, onde cada peça de roupa tem uma história para contar. Acreditamos que a moda pode ser sustentável e acessível a todos. Buscamos ser o brechó líder no mercado, reconhecido por nossa curadoria de alta qualidade e compromisso com a sustentabilidade. Queremos inspirar nossos clientes a fazer escolhas conscientes e estilosas.
        </Typography>

        <Typography variant="h3" sx={sobreStyles.heading}>
          Nossos Valores
        </Typography>
        <List sx={sobreStyles.list}>
          <ListItem sx={sobreStyles.listItem}>
            <ListItemIcon sx={sobreStyles.listItemIcon}>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Sustentabilidade: Reduzir o desperdício de roupas e promover a reutilização." />
          </ListItem>
          <ListItem sx={sobreStyles.listItem}>
            <ListItemIcon sx={sobreStyles.listItemIcon}>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Qualidade: Oferecer apenas peças em excelente estado e de alta qualidade." />
          </ListItem>
          <ListItem sx={sobreStyles.listItem}>
            <ListItemIcon sx={sobreStyles.listItemIcon}>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Diversidade: Uma seleção diversificada que atende a todos os estilos e gostos." />
          </ListItem>
          <ListItem sx={sobreStyles.listItem}>
            <ListItemIcon sx={sobreStyles.listItemIcon}>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Transparência: Honestidade em nossas práticas e produtos." />
          </ListItem>
        </List>

        <Typography variant="h3" sx={sobreStyles.heading}>
          Nossos Diferenciais
        </Typography>
        <List sx={sobreStyles.list}>
          <ListItem sx={sobreStyles.listItem}>
            <ListItemIcon sx={sobreStyles.listItemIcon}>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Curadoria Cuidadosa: Cada peça é selecionada com cuidado para garantir qualidade e estilo." />
          </ListItem>
          <ListItem sx={sobreStyles.listItem}>
            <ListItemIcon sx={sobreStyles.listItemIcon}>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Sustentabilidade: Foco em práticas que reduzem o impacto ambiental da moda." />
          </ListItem>
          <ListItem sx={sobreStyles.listItem}>
            <ListItemIcon sx={sobreStyles.listItemIcon}>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Preço Acessível: Moda de alta qualidade a preços justos." />
          </ListItem>
          <ListItem sx={sobreStyles.listItem}>
            <ListItemIcon sx={sobreStyles.listItemIcon}>
              <CheckCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Atendimento Personalizado: Uma experiência de compra amigável e atenciosa." />
          </ListItem>
        </List>

        <Typography variant="h3" sx={sobreStyles.heading}>
          O Que Buscamos Diferenciar no Mercado
        </Typography>
        <Typography variant="body1" sx={sobreStyles.paragraph}>
          A RPV Store se destaca por sua dedicação à moda sustentável e acessível. Estamos comprometidos em oferecer uma alternativa ecológica à moda rápida, com peças únicas que permitem aos nossos clientes expressar seu estilo de forma consciente.
        </Typography>
      </Paper>
    </Container>
  );
}

export default Sobre;
