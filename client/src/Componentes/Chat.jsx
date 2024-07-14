import { useEffect } from 'react'; // Importa o hook useEffect do React

function Chat() {
  useEffect(() => {
    // useEffect para carregar o script do Chatra ao montar o componente
    (function(d, w, c) {
      w.ChatraID = 'B2iY2v8mTyQEeqQzd'; // Define o ID do Chatra
      var s = d.createElement('script'); // Cria um elemento script
      w[c] = w[c] || function() { // Inicializa o objeto global 'Chatra'
        (w[c].q = w[c].q || []).push(arguments); // Adiciona funções à fila de execução
      };
      s.async = true; // Define o carregamento assíncrono do script
      s.src = 'https://call.chatra.io/chatra.js'; // Define a URL do script do Chatra
      if (d.head) d.head.appendChild(s); // Adiciona o script ao cabeçalho do documento HTML
    })(document, window, 'Chatra'); // Passa document, window e 'Chatra' como parâmetros

  }, []); // O segundo parâmetro vazio [] garante que useEffect execute apenas uma vez (ao montar o componente)

  console.log('Chat funcionando...'); // Exibe uma mensagem no console indicando que o Chat está funcionando

  return null; // Retorna null porque o componente não renderiza nenhum elemento visível
}

export default Chat; 
