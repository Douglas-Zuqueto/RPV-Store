import React from "react";
import categoriasRepository from "../services/categoriaRepository";

function CategoriasF() {
 const categorias = categoriasRepository.getCategoriasByGenero('F');
 console.log(categorias)
  return (
    <div>
    aSADDASF
    </div>
  )
}

export default CategoriasF;