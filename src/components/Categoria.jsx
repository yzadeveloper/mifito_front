import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { unicaCategoria } from "../services/funciones"

const Categoria = () => {

    const [categoria, setCategoria] = useState(null)
    
    const params = useParams()

    useEffect(()=>{
        unicaCategoria(params.id, setCategoria)
    },[])

  return (
    <>
        {categoria != null ? (
            <div>
                <h2>Categoria con el id {params.id}</h2>
                <p>con el nombre {categoria.category_name}</p>
            </div>
        ) : ('cargando...')}
    </>


  )
}

export default Categoria