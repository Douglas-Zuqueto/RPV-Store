import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import produtosRepository from "../services/produtosRepository";

function Estoque() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const produtosBD = await produtosRepository.getAllProdutos();
        setProdutos(produtosBD);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Paper elevation={3} style={{ padding: "20px" }}>
      <Typography
        style={{ textAlign: "center", marginBottom: "20px" }}
        variant="h5"
      >
        Gestão de estoque
      </Typography>
      <BarChart
        series={[{ data: produtos.map((produto) => produto.qnt_estoque) }]}
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
