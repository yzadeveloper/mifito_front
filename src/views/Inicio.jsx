import { products as data} from "../data/products"
import Product from "../components/Product"
import useFito from "../hooks/useFito"

export default function Inicio() {
  
  const { categoryActive} = useFito()
  const products = data.filter(product => product.id_category === categoryActive.id_category)
  console.log(products)
  return (
    <>
      <h1 className="text-4xl font-bold mt-5">{categoryActive.category_name}</h1>
      <hr className="bg-lime-600 mt-2" />
      <p className="text-2xl my-10">Elige un producto para calcular:</p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {products.map(product => (
          <Product 
            key={product.id_product}
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
  )
}
