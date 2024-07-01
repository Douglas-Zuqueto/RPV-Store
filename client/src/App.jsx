/* eslint-disable react/react-in-jsx-scope */
// import Header from "./Componentes/HeaderC";
// import React from 'react';
import Sidebar from "./Componentes/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.goblal.css";
import Provider from "./context/Provider";
import FormProdutos from "./Componentes/FormProdutos";

export default function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/historico" element={<FormProdutos />} />
        </Routes>
      </Router>
    </Provider>
  );
}
