//import { products as data} from "../data/products"
import { useState, useEffect } from "react";
import Product from "../components/Product"
import useFito from "../hooks/useFito"
import axios from "axios";

export default function Inicio() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
      const getProducts = async () => {
          const apiProducts = await axios.get("http://localhost:8000/api/products");
          setProducts(apiProducts.data);
      };
      getProducts()

  }, [])
  
  const { categoryActive} = useFito()
  //const products = products.filter(product => product.id_category === categoryActive.id_category)
  //console.log(products)

  const productFilter = products.filter(product => product.id_category === categoryActive.id_category)
  //console.log(productFilter)
  return (
    <>
      <h1 className="text-4xl text-gray-700 font-bold mt-5">{categoryActive.category_name}</h1>
      <hr className="bg-violet-600 mt-2" />
      <p className="text-2xl text-gray-800 my-10">Elige un producto para calcular:</p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {productFilter.map(product => (
          <Product 
            key={product.id_product}
            id_product={product.id_product}
            dose_ha={product.dose_ha}
            name_product={product.name_product}
            price_ml={product.price_ml}
            technical_comments={product.technical_comments}
            customer_comments={product.customer_comments}
            application_instructions={product.application_instructions}
            magrama_pdf={product.magrama_pdf}
            ecological={product.ecological}
            id_category={product.id_category}
          />
        ))}
      </div>
    
    
    </>
  )
}
