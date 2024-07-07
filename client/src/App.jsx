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
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;