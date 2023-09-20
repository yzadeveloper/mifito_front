//import { products as data } from "../data/products";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import useFito from "../hooks/useFito";
import axios from "axios";

export default function Inicio() {
  const { categoryActive } = useFito();

  const todosProductos = async (state) => {
    const peticion = await axios.get('http://localhost:8000/api/products')
    state(peticion.data)

}

  const [product, setProduct] = useState(null)
  useEffect(()=>{
      todosProductos(setProduct)

  },[])
  
  // // Comprobar si categoryActive está definido y contiene id_category
  // if (!categoryActive || !categoryActive.id_category) {
  //   // Puedes manejar este caso de manera adecuada, como mostrar un mensaje de error.
  //   return <p>No se ha seleccionado una categoría válida.</p>;
  // }

   

  // Filtrar productos por id_category
  const products = products.filter(product => product.id_category === categoryActive.id_category);
  console.log(products);
  
  return (
    <>
      <h1 className="text-4xl font-bold mt-5">{categoryActive.category_name}</h1>
      <hr className="bg-lime-600 mt-2" />
      <p className="text-2xl my-10">Elige un producto para calcular:</p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {products.map(product => (
          <Product 
            key={product.id_product}
            id_category={product.id_category}
            id_product={product.id_product}
            dose_ha={product.dose_ha}
            name_product={product.name_product}
            price_ml={product.price_ml}
            technical_comments={product.technical_comments}
            customer_comments={product.customer_comments}
            application_instructions={product.application_instructions}
            magrama_pdf={product.magrama_pdf}
            ecological={product.ecological}
          />
        ))}
      </div>
    </>
  );
}
