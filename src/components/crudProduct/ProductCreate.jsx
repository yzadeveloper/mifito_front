import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Navbar";


export default function ProductCreate() {

  const [categorylist, setCategorylist] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/categories").then(response=>{
      setCategorylist(response.data);
    });

  }, []);

  return (

    <>
      <Navbar></Navbar>
        <div className="mt-12">
          <div className=" p-5 text-xs uppercase font-bold text-left text-gray-700 bg-white dark:text-white dark:bg-gray-800">
          </div>
          <form action="" className="max-w-4xl mx-auto p-4 bg-white rounded-sm">
            <p className="p-8 text-xl font-bold text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">Introduce los datos del nuevo producto</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-xl font-medium">Nombre Producto</label>
                <input type="text" name="" id=""
                  className="border border-gray-300 text-gray-900 text-xl rounded-md w-full p-3" placeholder="Nombre de producto" />
              </div>

              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-xl font-medium">Categoría</label>
                <select id="id_category"  className=" border border-gray-300 text-gray-700 text-xl rounded-md focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500">
                    <option defaultValue>Selecciona categoría</option>
                    {
                      categorylist.map( (item) => {
                        return (
                          <option value={item.id_category} key={item.id_category}>{item.category_name}</option>
                        )
                      })
                    }
                    
              </select>
              </div>

              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-xl font-medium">Dosis por Hectárea (litros)</label>
                <input type="text" name="" id=""
                  className="border border-gray-300 text-gray-900 text-xl rounded-md w-full p-3" placeholder="ej: 4" />
              </div>

              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-xl font-medium">Precio ml (en €)</label>
                <input type="text" name="" id=""
                  className="border border-gray-300 text-gray-900 text-xl rounded-md w-full p-3" placeholder="ej: 0.02" />
              </div>

              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-xl font-medium">Ficha técnica del Magrama</label>
                <input type="text" name="" id=""
                  className="border border-gray-300 text-gray-900 text-xl rounded-md w-full p-3" placeholder="copiar link de descarga" />
              </div>

              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-xl font-medium">Tiene registro para ecológico</label>
                <input type="text" name="" id=""
                  className="border border-gray-300 text-gray-900 text-xl rounded-md w-full p-3" placeholder="ej: seleccionar" />
              </div>

              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-xl font-medium">Comentarios del técnico</label>
                <textarea
                  name=""
                  id=""
                  rows="6"
                  className="border border-gray-300 text-gray-900 text-xl rounded-md w-full p-3"
                  placeholder="ej: Mezclar con x producto para mayor efectividad"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-xl font-medium">Recordatorio para cliente</label>
                <textarea
                  name=""
                  id=""
                  rows="6"
                  className="border border-gray-300 text-gray-900 text-xl rounded-md w-full p-3"
                  placeholder="ej: Quema todo"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-xl font-medium">Instrucciones aplicación</label>
                <textarea
                  name=""
                  id=""
                  rows="6"
                  className="border border-gray-300 text-gray-900 text-xl rounded-md w-full p-3"
                  placeholder="ej: Evitar horas de máximo calor"
                />
              </div>
            </div>

            <div className="mt-6">
              <button type="submit" className="px-4 py-2 bg-violet-700 text-lg text-white font-bold uppercase rounded-md hover:bg-violet-800 focus:ring-4 focus:ring-primary-200">
                Crear
              </button>
            </div>
          </form>
        </div>

    </>
  )
}


