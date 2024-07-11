import React, { useState, useEffect } from "react";
import ProdutoCard from "./ProdutoCard";
import Chat from "./Chat";
import searchRepository from '../services/searchRepository'
import { useSearchParams } from "react-router-dom";
// import Paper from '@mui/material/Paper';

function produtosSearch() {
  const [produtos, setProdutos] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    async function fetchData() {
      try {
        const term = searchParams.get("term")
        console.log(term)
        const produtosSearch = await searchRepository.searchNome(term);
        setProdutos(produtosSearch);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

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
            <ProdutoCard key={produtos.id} data={produtos} />
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

export default produtosSearch;