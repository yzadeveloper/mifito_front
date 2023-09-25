
import useFito from "../hooks/useFito"
import Category from "./Category"



export default function Sidebar() {

  const { categories } = useFito()
  

 

  
  return (
    <aside className="md:w-84">
      <div className="p-4">
        <img className="w-40" src="img/mifito_logo.png" alt="mifito_logo" />

      </div>

      <div className="mt-10 px-5">
        {categories.map( category => (
            <Category
              key={category.id_category}
              category={category}
            />
        ))}
      </div>

      <div className="my-5 px-5">

        <button type="button" className=" text-center border border-violet-600 bg-white  text-violet-800 font-bold text-lg uppercase rounded-lg w-full p-3 truncate ">
          Cerrar sesión
        </button>

      </div>
    </aside>
  )
}



