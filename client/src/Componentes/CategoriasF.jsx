import React, { useEffect, useState } from "react";
import categoriasRepository from "../services/categoriaRepository";

function CategoriasF() {
    const [categorias, setCategorias] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const categoriasBD = await categoriasRepository.getCategoriasByGenero('F')
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

export default CategoriasF;