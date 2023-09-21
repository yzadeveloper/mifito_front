import { useEffect, useState } from "react"
import { todasCategorias } from "../services/funciones"
import Tableproducts from "./Tableproducts"

const Inicio = () => {

    const [categorias, setCategorias] = useState(null)
    useEffect(()=>{
        todasCategorias(setCategorias)

    },[])
  return (
    <>
        <div>
        {categorias != null ? (
            categorias.map(categoria => (
                <div key={categoria.id_category}>
                    <a href={`/categoria/${categoria.id_category}`}>{categoria.category_name}</a>
                </div>
            ))
        ) : ('cargando...')}

        </div>

        <div>
            <Tableproducts />
        </div>
    
    
    </>
  )
}

export default Inicio