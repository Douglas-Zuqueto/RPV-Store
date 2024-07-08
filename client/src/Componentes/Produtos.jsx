import React, { useState, useEffect } from "react";
import ProdutoCard from "./ProdutoCard";
import Chat from '../Componentes/Chat'
import produtosRepository from "../services/produtosRepository";
// import Paper from '@mui/material/Paper';

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const produtosBD = await produtosRepository.getAllProdutos()
          setProdutos(produtosBD);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
    },[]);

  const tema = {
    // padding: "120px 20px 50px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  };

  return (
    <>
        <div style={tema}>
          {produtos.length > 0 ? (
            produtos.map((produtos) => (
              <ProdutoCard key={produtos.id} data={(produtos)} />
            ))
          ) : (
            <p
              style={{
                textAlign: "center",
                marginTop: "50px",
                fontSize: "1.3rem",
                color: "#888",
              }}
            >
              Nenhum produto encontrado. :({" "}
            </p>
          )}
        </div>
      <Chat />
    </>
  );
}

export default Produtos;