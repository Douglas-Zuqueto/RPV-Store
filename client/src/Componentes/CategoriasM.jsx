import React from "react";
import categoriasRepository from "../services/categoriaRepository";

const gen = {gen: 'M'}
function CategoriasM() {
 const categorias = categoriasRepository.getCategoriasByGenero(gen);
 console.log(categorias)
  return (
    <div>
      klsadjlas
    </div>
  )
}

export default CategoriasM;