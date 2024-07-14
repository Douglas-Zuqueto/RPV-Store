import React from "react"; // Importa o react 
import Sidebar from "./Componentes/Sidebar"; // Importa o componente Sidebar
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa elementos de roteamento do React Router
import "./styles.global.css"; // Importa um arquivo de estilos globais (possível erro de digitação em 'styles.global.css')
import Provider from "./context/Provider"; // Importa o componente Provider de um contexto específico
import FormProdutos from "./Componentes/FormProdutos"; // Importa o componente FormProdutos
import Produtos from "./Componentes/Produtos"; // Importa o componente Produtos
import Categorias from "./Componentes/Categorias"; // Importa o componente Categorias
import Sobre from "./Componentes/Sobre"; // Importa o componente Sobre
import PerguntasFrequentes from "./Componentes/PerguntasFrequentes"; // Importa o componente PerguntasFrequentes
import CategoriasM from "./Componentes/CategoriasM"; // Importa o componente CategoriasM
import CategoriasF from "./Componentes/CategoriasF"; // Importa o componente CategoriasF
import TabelaProdutos from "./Componentes/TabelaProdutos"; // Importa o componente TabelaProdutos
import Login from "./Componentes/Login"; // Importa o componente Login
import Registrar from "./Componentes/Registrar"; // Importa o componente Registrar
import Estoque from "./Componentes/Estoque"; // Importa o componente Estoque
import Checkout from "./Componentes/Checkout"; // Importa o componente Checkout
import Chat from "./Componentes/Chat"; // Importa o componente Chat
import Dashboard from './Componentes/Dashboard' // Importa o componente Dashboard

function App() {
  return (
    <>
      <Provider> {/* Renderiza o componente Provider para prover contexto aos componentes abaixo */}
        <Router> {/* Define o componente Router para gerenciar as rotas */}
          <Routes> {/* Define as rotas dentro do componente Routes */}
            <Route path="/" element={<Sidebar />}> {/* Rota principal que renderiza o Sidebar */}
              <Route index element={<Produtos />} /> {/* Rota para renderizar o componente Produtos na página inicial */}
              <Route path="/categorias" element={<Categorias />} /> {/* Rota para renderizar o componente Categorias */}
              <Route path="/historico" element={<FormProdutos />} /> {/* Rota para renderizar o componente FormProdutos */}
              <Route path="/sobre" element={<Sobre />} /> {/* Rota para renderizar o componente Sobre */}
              <Route path="/pix" element={<Checkout />} /> {/* Rota para renderizar o componente Checkout */}
              <Route path="/chat" element={<Chat />} /> {/* Rota para renderizar o componente Chat */}
              <Route path="/perguntasFrequentes" element={<PerguntasFrequentes />}/> {/* Rota para renderizar o componente PerguntasFrequentes */}
              <Route path="/categorias/masculinas" element={<CategoriasM />} /> {/* Rota para renderizar o componente CategoriasM */}
              <Route path="/categorias/femininas" element={<CategoriasF />} /> {/* Rota para renderizar o componente CategoriasF */}
              <Route path="/TabelaProdutos" element={<TabelaProdutos />} /> {/* Rota para renderizar o componente TabelaProdutos */}
              <Route path="/estoque" element={<Estoque />} /> {/* Rota para renderizar o componente Estoque */}
              <Route path="/addNovoProduto" element={<FormProdutos />} /> {/* Rota para renderizar o componente FormProdutos */}
              <Route path="/dash" element={<Dashboard />} /> {/* Rota para renderizar o componente Dashboard */}
            </Route>
            <Route path="/Login" element={<Login />} /> {/* Rota para renderizar o componente Login */}
            <Route path="/Registrar" element={<Registrar />} /> {/* Rota para renderizar o componente Registrar */}
            {/* <Route path="/FinalizarCompra" element={<Checkout />} /> */} {/* Comentado, não utilizado neste momento */}
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
