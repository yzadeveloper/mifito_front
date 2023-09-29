import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <> 
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 mx-5 my-5">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                    <img src="../img/mifito_logo.png" className="h-12 mr-3" alt="MiFito Logo"/>
                    
                </a>
                <div className="flex md:order-2">
                <div className="flex justify-end m-2 p-2">
                    <Link to="/auth/registro" className="px-4 py-2 font-bold text-md uppercase bg-violet-500 hover:bg-violet-700 text-white rounded-lg mx">Crear Usuario</Link>

                </div>
                <div className="flex justify-end m-2 p-2">
                    <Link to="/productos/crear" className="px-4 py-2 font-bold text-md uppercase bg-violet-500 hover:bg-violet-700 text-white rounded-lg mx">Crear Producto</Link>

                </div>
                    
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="/" className="block py-2 pl-3 pr-4 text-xl text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 md:dark:hover:text-violet-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ">Inicio</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-xl text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 md:dark:hover:text-violet-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Mi Cuenta</a>
                    </li>
                    <li>
                        <a href="/productos" className="block py-2 pl-3 pr-4 text-xl text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 md:dark:hover:text-violet-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ">Ver Productos</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-xl text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 md:dark:hover:text-violet-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Ver Categorías</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>

    
    
    </>
  )
}
