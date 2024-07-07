import React, { useEffect, useState } from "react";
import categoriasRepository from "../services/categoriaRepository";

function CategoriasM() {
    const [categorias, setCategorias] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const categoriasBD = await categoriasRepository.getCategoriasByGenero('M')
          console.log(categoriasBD)
          console.log(categoriasBD.data)
          setCategorias(categoriasBD);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
    }, []);
  return (
    <div className="h-screen">
      {categorias.map((categorias) => (
        <div key={categorias.id}>{categorias.nome}</div>
      ))}
    </div>
  )
}

export default CategoriasM;