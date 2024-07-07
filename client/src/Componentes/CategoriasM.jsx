import React from "react";
import categoriasRepository from "../services/categoriaRepository";

function CategoriasM() {
 const categorias = categoriasRepository.getCategoriasByGenero('M');
 console.log(categorias)
  return (
    <div>
    aSADDASF
    </div>
  )
}

export default CategoriasM;