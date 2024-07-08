import React from "react";
import Sidebar from "./Componentes/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.goblal.css";
import Provider from "./context/Provider";
import FormProdutos from "./Componentes/FormProdutos";
import Produtos from "./Componentes/Produtos";
import Categorias from "./Componentes/Categorias";
import Sobre from "./Componentes/Sobre";
import PerguntasFrequentes from "./Componentes/PerguntasFrequentes";
import CategoriasM from "./Componentes/CategoriasM";
import CategoriasF from "./Componentes/CategoriasF";
import TabelaProdutos from "./Componentes/TabelaProdutos";
import Login from "./Componentes/Login";
import FinalizarCompra from "./Componentes/FinalizarCompra";
import Registrar from "./Componentes/Registrar";

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route index element={<Produtos />} />
            <Route path="/categorias" element={<Categorias/>} />
            <Route path="/historico" element={<FormProdutos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/perguntasFrequentes" element={<PerguntasFrequentes />} />
            <Route path="/categorias/masculinas" element={<CategoriasM />} />
            <Route path="/categorias/femininas" element={<CategoriasF />} />
          </Route>
          <Route path="/Login" element = {<Login/>} />
          <Route path="/Registrar" element = {<Registrar/>} />
          <Route path="/FinalizarCompra" element = {<FinalizarCompra/>} />
          <Route path="/TabelaProdutos" element = {<TabelaProdutos/>} />
        </Routes>
        
      </Router>
    </Provider>
  );
}

export default App;