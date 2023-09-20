import { useEffect, useState } from "react"
import { todasCategorias } from "../funciones/funciones"

const Inicio = () => {

    const [categorias, setCategorias] = useState(null)
    useEffect(()=>{
        todasCategorias(setCategorias)

    },[])
  return (
    <>
        {categorias != null ? (
            categorias.map(categoria => (
                <div key={categoria.id_category}>
                    <a href={`/categoria/${categoria.id_category}`}>{categoria.category_name}</a>
                </div>
            ))
        ) : ('cargando...')}
    
    
    </>
  )
}

export default Inicio