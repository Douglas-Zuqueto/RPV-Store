// import Header from "./Componentes/HeaderC";
// import React from 'react';
import Sidebar from "./Componentes/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}
