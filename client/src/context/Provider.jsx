/* eslint-disable react/react-in-jsx-scope */

import { useState } from "react";
import AppContext from "./AppContext";
import PropTypes from "prop-types";

function Provider({ children }) {
  const [selectedFile, setSelectedFile] = useState();
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [loading, setLoading] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const value = {
    loading,
    setLoading,
    selectedFile,
    setSelectedFile,
    nome,
    setNome,
    descricao,
    setDescricao,
    preco,
    setPreco,
    quantidade,
    setQuantidade,
    categoria,
    setCategoria,
    produtos,
    setProdutos,
    cartItems,
    setCartItems,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Provider;
