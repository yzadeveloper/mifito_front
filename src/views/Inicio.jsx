import { products } from "../data/products"
import Product from "../components/Product"

export default function Inicio() {
  console.log(products)
  return (
    <>
      <h1 className="text-4xl font-bold">Inicio</h1>
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
