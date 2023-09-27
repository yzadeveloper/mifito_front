import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import Navbar from "../Navbar";


export default function ProductIndex() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const apiProducts = await axios.get("http://localhost:8000/api/products");
            setProducts(apiProducts.data);
        };
        getProducts()

    }, [])
  return (
    <>
        <Navbar></Navbar>
        
        <main>
            <div className="mt-10 mx-5 my-5">
                
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <caption className=" p-10 text-xs uppercase font-bold text-left text-gray-700 bg-white dark:text-white dark:bg-gray-800">
                           
                            
                        </caption>
                        <thead className="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nombre Producto
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Categoría
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Dosis Ha
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ficha Técnica Magrama
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ecológico
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Editar
                                </th>
                               
                            </tr>
                        </thead>
                        <tbody>
                                {products.map((product) => {
                                    return (
                                        <tr key={product.id_product} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xl">
                                            <td className="px-6 py-4">{product.name_product}</td>
                                            <td className="px-6 py-4">{product.categories.category_name}</td>
                                            <td className="px-6 py-4">{product.dose_ha}</td>
                                            <td className="px-6 py-4">{product.magrama_pdf}</td>
                                            <td className="px-6 py-4">{product.ecological}</td>
                                            <td className="px-6 py-4">Editar/Eliminar</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    
    
    </>
  )
}
