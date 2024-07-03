import React from "react";

function PerguntasFrequentes() {
  const faqStyles = {
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
    subheading: {
      marginTop: "20px",
      color: "#7ED957",
    },
    paragraph: {
      textAlign: "justify",
      marginBottom: "20px",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={faqStyles.container}>
      <h1 style={faqStyles.heading}>Perguntas Frequentes</h1>

      <h2 style={faqStyles.subheading}>O que é a RPV Store?</h2>
      <p style={faqStyles.paragraph}>
        A RPV Store é uma loja de roupas fundada em 2024 com o objetivo de
        promover moda sustentável e oferecer peças únicas e de qualidade.
      </p>

      <h2 style={faqStyles.subheading}>Como posso comprar na RPV Store?</h2>
      <p style={faqStyles.paragraph}>
        Você pode comprar na RPV Store visitando nossa loja online ou física. Na
        loja online, adicione os itens desejados ao carrinho, prossiga para o
        checkout e siga as instruções para finalizar a compra.
      </p>

      <h2 style={faqStyles.subheading}>Quais são as formas de pagamento aceitas?</h2>
      <p style={faqStyles.paragraph}>
        Aceitamos várias formas de pagamento, incluindo cartões de crédito,
        débito, PayPal e transferência bancária. Verifique a página de pagamento
        durante o checkout para ver todas as opções disponíveis.
      </p>

      <h2 style={faqStyles.subheading}>Qual é a política de devolução da RPV Store?</h2>
      <p style={faqStyles.paragraph}>
        Nossa política de devolução permite devoluções dentro de 30 dias a partir
        da data de compra, desde que os itens estejam em condições originais e
        não usados. Consulte nossa página de devoluções para obter mais detalhes
        e instruções.
      </p>
    </div>
  );
}

export default PerguntasFrequentes;
