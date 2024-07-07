import React from "react";
import categoriasRepository from "../services/categoriaRepository";

const gen = {gen: 'F'}

function CategoriasF() {
 const categorias = categoriasRepository.getCategoriasByGenero(gen);
 console.log(categorias)
  return (
    <div>
    aSADDASF
    </div>
  )
}

export default CategoriasF;