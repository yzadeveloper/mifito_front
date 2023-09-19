import useFito from "../hooks/useFito"
import TreatmentProduct from "./TreatmentProduct";

export default function Summary() {

  const {treatment} = useFito();

  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-bold mt-4">Tratamiento</h1>
      <hr className="bg-lime-600 mt-2" />

      <p className="text-xl my-5">Aquí puedes ver los productos añadidos al tratamiento.</p>

      <div className="py-10">
        {treatment.length === 0 ? (
          <p className="text-center text-2xl">No hay productos en el tratamiento todavía.</p>

        ) : (
          treatment.map(product =>(
            <TreatmentProduct
              key={product.id_product}
              product={product}
              />
          ))

        )}
      </div>

      <form className="w-full">
        <div className="mt-5">
          <input 
            type="submit"
            value="generar PDF"
            className="bg-lime-600 hover:bg-lime-800 text-white w-full mt-5 p-3 rounded-sm
            uppercase font-bold cursor-pointer"
         />
        </div>

      </form>
      
    </aside>
  )
}
