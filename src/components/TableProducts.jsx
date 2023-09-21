import { useEffect, useState } from "react"
import { todosProductos } from "../services/funciones"



const Tableproducts = () => {

    const [productos, setProductos] = useState(null)
    useEffect(()=>{
        todosProductos(setProductos)

    },[])
  return (
    <>
        {productos != null ? (
            productos.map(producto => (
                <div key={producto.id_category}>
                    <a href={`/producto/${producto.name_product}`}>{producto.name_product}</a>
                </div>
            ))
        ) : ('cargando...')}
    
    
    </>
  )
}

export default Tableproducts