import React, { useEffect, useState } from "react"; // Importa o React, useEffect e useState
import categoriasRepository from "../services/categoriaRepository"; // Importa o serviço categoriasRepository que provavelmente faz chamadas à API


function CategoriasF() {
    const [categorias, setCategorias] = useState([]); // Define o estado 'categorias' como um array vazio inicialmente
  
    // useEffect para carregar as categorias ao montar o componente
    useEffect(() => {
      async function fetchData() {
        try {
          // Chama a função getCategoriasByGenero do categoriasRepository para obter categorias específicas (por gênero 'F')
          const categoriasBD = await categoriasRepository.getCategoriasByGenero('F')
          setCategorias(categoriasBD); // Atualiza o estado 'categorias' com os dados obtidos
        } catch (error) {
          console.error('Error fetching data:', error); // Exibe um erro se houver problemas ao obter os dados
        }
      }
  
      fetchData(); // Chama a função fetchData ao montar o componente (equivalente a componentDidMount)
    }, []); // O segundo parâmetro vazio [] garante que useEffect execute apenas uma vez (ao montar o componente)

    // Renderiza a lista de categorias na tela
    return (
    <div className="h-screen">
      {categorias.map((categorias) => (
        <div key={categorias.id}>{categorias.nome}</div>
      ))}
    </div>
  )
}

export default CategoriasF;