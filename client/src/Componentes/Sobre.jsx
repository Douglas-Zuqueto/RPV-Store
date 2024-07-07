import React from "react";
import Chat from '../Componentes/Chat'

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
      backgroundColor: "#f9f9f9",
      padding: "10px",
      borderRadius: "5px",
      marginBottom: "10px",
    },
    listItemStrong: {
      color: "#7ED957",
    },
  };

  return (
    <>
    <div style={sobreStyles.container}>
      <h1 style={sobreStyles.heading}>Sobre</h1>
      <p style={sobreStyles.paragraph}>
        A RPV Store foi fundada em 2024 visando dar uma nova vida às roupas e
        promover a moda sustentável. Desde o início, nosso foco tem sido
        oferecer peças únicas e de qualidade, enquanto reduzimos o impacto
        ambiental.
      </p>
      <p style={sobreStyles.paragraph}>
        Nossa missão é proporcionar uma experiência de compra única, onde cada
        peça de roupa tem uma história para contar. Acreditamos que a moda pode
        ser sustentável e acessível a todos. Buscamos ser o brechó líder no
        mercado, reconhecido por nossa curadoria de alta qualidade e compromisso
        com a sustentabilidade. Queremos inspirar nossos clientes a fazer
        escolhas conscientes e estilosas.
      </p>
      <h2 style={sobreStyles.heading}>Nossos Valores</h2>
      <ul style={sobreStyles.list}>
        <li style={sobreStyles.listItem}>
          <strong style={sobreStyles.listItemStrong}>Sustentabilidade:</strong> Reduzir o desperdício de roupas e promover a reutilização.
        </li>
        <li style={sobreStyles.listItem}>
          <strong style={sobreStyles.listItemStrong}>Qualidade:</strong> Oferecer apenas peças em excelente estado e de alta qualidade.
        </li>
        <li style={sobreStyles.listItem}>
          <strong style={sobreStyles.listItemStrong}>Diversidade:</strong> Uma seleção diversificada que atende a todos os estilos e gostos.
        </li>
        <li style={sobreStyles.listItem}>
          <strong style={sobreStyles.listItemStrong}>Transparência:</strong> Honestidade em nossas práticas e produtos.
        </li>
      </ul>
      <h2 style={sobreStyles.heading}>Nossos Diferenciais</h2>
      <ul style={sobreStyles.list}>
        <li style={sobreStyles.listItem}>
          <strong style={sobreStyles.listItemStrong}>Curadoria Cuidadosa:</strong> Cada peça é selecionada com cuidado para garantir qualidade e estilo.
        </li>
        <li style={sobreStyles.listItem}>
          <strong style={sobreStyles.listItemStrong}>Sustentabilidade:</strong> Foco em práticas que reduzem o impacto ambiental da moda.
        </li>
        <li style={sobreStyles.listItem}>
          <strong style={sobreStyles.listItemStrong}>Preço Acessível:</strong> Moda de alta qualidade a preços justos.
        </li>
        <li style={sobreStyles.listItem}>
          <strong style={sobreStyles.listItemStrong}>Atendimento Personalizado:</strong> Uma experiência de compra amigável e atenciosa.
        </li>
      </ul>
      <h2 style={sobreStyles.heading}>O Que Buscamos Diferenciar no Mercado</h2>
      <p style={sobreStyles.paragraph}>
        A RPV Store se destaca por sua dedicação à moda sustentável e acessível.
        Estamos comprometidos em oferecer uma alternativa ecológica à moda
        rápida, com peças únicas que permitem aos nossos clientes expressar seu
        estilo de forma consciente.
      </p>
    </div>
    <Chat />
    </>
  );
}

export default Sobre;
