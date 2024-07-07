import React from "react";
import categoriasRepository from "../services/categoriaRepository";

function CategoriasM() {
 const categorias = categoriasRepository.getCategoriasByGenero('M');
  return (
    <div>
      klsadjlas
    </div>
  )
}

export default CategoriasM;