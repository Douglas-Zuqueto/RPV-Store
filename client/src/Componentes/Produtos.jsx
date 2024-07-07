import React, { useContext, useEffect } from "react";
import ProdutoCard from "./ProdutoCard";
import Loading from "./Loading";
import AppContext from "../context/AppContext";
import Chat from '../Componentes/Chat'
// import Paper from '@mui/material/Paper';

function Produtos() {
  const { loading, produtos, setLoading, setProdutos } = useContext(AppContext);

  useEffect(() => {
    const fetchProdutos = async () => {
      setLoading(true);
      try {
        const response = await produtos;
        setProdutos(response);
        console.log("dados response", response);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, [produtos, setLoading, setProdutos]);

  const tema = {
    // padding: "120px 20px 50px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div style={tema}>
          {produtos.length > 0 ? (
            produtos.map((produto) => (
              <ProdutoCard key={produto.id} data={produto} />
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
      )}
      <Chat />
    </>
  );
}

export default Produtos;
