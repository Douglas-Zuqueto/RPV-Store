import React, { useState, useEffect } from "react"; // Importa hooks do React
import { BarChart } from "@mui/x-charts/BarChart"; // Importa o componente de gráfico de barras do Material-UI
import Paper from "@mui/material/Paper"; // Importa o componente de papel do Material-UI
import produtosRepository from "../services/produtosRepository"; // Importa o repositório de produtos

function Estoque() {
  const [produtos, setProdutos] = useState([]); // Estado para armazenar os produtos do estoque

  useEffect(() => {
    async function fetchData() {
      try {
        const produtosBD = await produtosRepository.getAllProdutos(); // Obtém todos os produtos do repositório
        setProdutos(produtosBD); // Atualiza o estado com os produtos obtidos
      } catch (error) {
        console.error("Erro ao buscar dados:", error); // Exibe um erro caso ocorra problema ao buscar os dados
      }
    }

    fetchData(); // Chama a função fetchData para buscar os dados ao montar o componente
  }, []); // Efeito executado apenas uma vez ao montar o componente, devido à dependência vazia []

  // Renderiza o componente de gráfico de barras dentro de um Paper do Material-UI
  return (
    <Paper elevation={3} style={{ padding: "20px" }}>
      <BarChart
        series={[{ data: produtos.map((produto) => produto.qnt_estoque) }]} // Configura os dados do gráfico com a quantidade em estoque de cada produto
        height={290} 
        xAxis={[
          {
            data: produtos.map((produto) => produto.nome), 
            scaleType: "band",
          },
        ]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }} 
      />
    </Paper>
  );
}

export default Estoque; 
