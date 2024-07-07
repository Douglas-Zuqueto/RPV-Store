import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function PerguntasFrequentes() {
  const faqItems = [
    {
      question: "O que é a RPV Store?",
      answer:
        "A RPV Store é uma loja de roupas fundada em 2024 com o objetivo de promover moda sustentável e oferecer peças únicas e de qualidade.",
    },
    {
      question: "Como posso comprar na RPV Store?",
      answer:
        "Você pode comprar na RPV Store visitando nossa loja online ou física. Na loja online, adicione os itens desejados ao carrinho, prossiga para o checkout e siga as instruções para finalizar a compra.",
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer:
        "Aceitamos várias formas de pagamento, incluindo cartões de crédito, débito, PayPal e transferência bancária. Verifique a página de pagamento durante o checkout para ver todas as opções disponíveis.",
    },
    {
      question: "Qual é a política de devolução da RPV Store?",
      answer:
        "Nossa política de devolução permite devoluções dentro de 30 dias a partir da data de compra, desde que os itens estejam em condições originais e não usados. Consulte nossa página de devoluções para obter mais detalhes e instruções.",
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" sx={{ color: "#0097B2", mb: 4 }}>
          Perguntas Frequentes
        </Typography>

        {faqItems.map((item, index) => (
          <Accordion key={index} sx={{ mb: 3 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ color: "#009733" }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Divider sx={{ my: 4 }} />

        {/* <Typography variant="body2" align="center" sx={{ color: "#666" }}>
          Ainda tem dúvidas? Entre em contato conosco através do email contato@rpvstore.com
        </Typography> */}
      </Paper>
    </Container>
  );
}

export default PerguntasFrequentes;