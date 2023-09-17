import { products as data} from "../data/products"
import Product from "../components/Product"
import useFito from "../hooks/useFito"

export default function Inicio() {
  
  const { categoryActive} = useFito()
  const products = data.filter(product => product.id_category === categoryActive.id_category)
  return (
    <>
      <h1 className="text-4xl font-bold">{categoryActive.category_name}</h1>
      <p className="text-2xl my-10">Elige un producto para calcular</p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {products.map(product => (
          <Product 
            key={product.id_product}
            product={product}
          />
        ))}
      </div>
    
    
    </>
  )
}
