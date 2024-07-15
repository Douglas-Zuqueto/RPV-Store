import fetch from "isomorphic-fetch"; // Importa a função fetch compatível com ambientes de servidor e cliente
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react"; // Importa hooks do React

import { useAuth } from "@clerk/clerk-react"; // Importa hook de autenticação do Clerk

function Auth() {
  const [data, setData] = useState(null); // Estado para armazenar os dados da API
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para armazenar erros
  const { getToken } = useAuth(); // Obtém o token de autenticação usando o hook useAuth do Clerk

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken(); // Obtém o token de autenticação do usuário

        // Faz uma requisição GET para a API usando fetch
        const response = await fetch(
          "http://localhost:3000/", // URL da API
          {
            method: "GET", // Método HTTP GET
            headers: {
              Accept: "application/json", // Tipo de conteúdo aceito pela API
              Authorization: `Bearer: ${token}`, // Token de autenticação no cabeçalho Authorization
              mode: "cors", // Modo CORS para permitir requisições cross-origin
            },
          }
        );

        // Verifica se a resposta da API foi bem-sucedida
        if (!response.ok) {
          throw new Error("Network response was not ok"); // Lança um erro se a resposta não foi bem-sucedida
        }

        // Converte a resposta para JSON
        const result = await response.json();

        setData(result); // Atualiza o estado com os dados da API
        setLoading(false); // Define que o carregamento foi concluído
      } catch (err) {
        setError(err); // Armazena o erro no estado de erro
        setLoading(false); // Define que o carregamento foi concluído
      }
    };

    fetchData(); // Chama a função fetchData para buscar os dados da API
  }, [getToken]); // Efeito executado sempre que getToken é modificado

  // Renderiza mensagem de carregamento enquanto os dados estão sendo buscados
  if (loading) {
    return <div>Loading...</div>;
  }

  // Renderiza mensagem de erro caso ocorra um erro ao buscar os dados da API
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Renderiza os dados da API após serem buscados com sucesso
  return (
    <div>
      <h1>Data from API:</h1>
      <p>{JSON.stringify(data, null, 2)}</p> {/* Exibe os dados da API formatados como JSON */}
    </div>
  );
}

export default Auth; 
