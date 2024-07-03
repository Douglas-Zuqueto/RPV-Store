/* eslint-disable react/react-in-jsx-scope */
// import Header from "./Componentes/HeaderC";
// import React from 'react';
import Sidebar from "./Componentes/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.goblal.css";
import Provider from "./context/Provider";
import FormProdutos from "./Componentes/FormProdutos";
import Produtos from "./Componentes/Produtos";
import Categorias from "./Componentes/Categorias";
import Historico from "./Componentes/Historico";
import Contato from "./Componentes/Contato";

export default function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route index element={<Produtos />} ></Route>
            <Route path="/categorias" element={<Categorias/>} ></Route>
            <Route path="/historico" element={<Historico />} ></Route>
            <Route path="/contato" element={<Contato />} ></Route>
            <Route path="/perguntasFrequentes" element={<FormProdutos />} ></Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}
