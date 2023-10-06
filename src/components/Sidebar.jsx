
import useFito from "../hooks/useFito"
import Category from "./Category"
import { Link } from "react-router-dom"



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

        <Link to="/productos" ><button className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-900 via-violet-600 to-violet-900 text-white w-full mt-5 p-3 rounded-lg uppercase font-bold cursor-pointer">Panel de administración</button></Link>

        <button type="button" className=" mt-4 text-center border border-violet-600 bg-white  text-violet-800 font-bold text-lg uppercase rounded-lg w-full p-3 truncate ">
          Cerrar sesión
        </button>

      </div>
    </aside>
  )
}



