import { useState } from "react";
import useFito from "../hooks/useFito";

export default function ModalProduct() {
    const { product, handleClickModal, handleAddOrder } = useFito();
    const [quantity, setQuantity] = useState('');
    const [terreno, setTerreno] = useState('');
    const [dosisGeneral, setDosisGeneral] = useState('');
    const setCalculo = useState('');
    
    
      const calcHectareas = () => {
        let numero1 = parseFloat(terreno);
        let numero2 = parseFloat(dosisGeneral);
        setCalculo(numero1 * numero2);
        console.log(calcHectareas);
      };
    
      const calcMetros = () => {
        let numero1 = parseFloat(terreno);
        let numero2 = parseFloat(dosisGeneral);
        setQuantity((numero1 / 10000) * numero2);
      };
    
      const calcFerrados = () => {
        let numero1 = parseFloat(terreno);
        let numero2 = parseFloat(dosisGeneral);
        setQuantity(((numero1 * 535) / 10000) * numero2);
      };
       
      
      // Función para limpiar los campos y reiniciar la cantidad
      const clearInputs = () => {
        setTerreno("");
        setQuantity("");
      };
      
      setQuantity(setCalculo);

    return (
        <div className="md:flex gap-10 mx-3 p-3">
            <div className="md:w-2/4">
                <h1 className="text-3xl text-gray-700 font-bold mt-2">{product.name_product}</h1>

                <p id="dosisGeneral" className="mt-5 font-bold text-xl text-gray-800"
                    value={dosisGeneral}
                    onChange={(e) => setDosisGeneral(e.target.value)}
                > {product.dose_ha} </p>

                <p className="mt-2 font-bold text-s text-gray-800">Coste aproximado ml: {product.price_ml}€</p>
                <hr className="bg-gray-600 mt-2" />
                <p className="mt-5 font-bold text-xl text-gray-800">Extensión de terreno a tratar:</p>
                <div className="flex gap-2 mt-2">
                    <div className="">
                        <label htmlFor="hectares" className="mt-5 font-bold text-s text-gray-800">Escribe un número:</label>
                        <input
                            className="mt-2 w-full p-2 bg-gray-200 border"
                            type="number"
                            id="terreno"
                            value={terreno}
                            onChange={(e) => setTerreno(e.target.value)}
                            
                        />
                    </div>
                    
                </div>
                <div className="mt-5">
                    <button
                        type="button"
                        onClick={clearInputs}
                        className="  text-center border border-violet-600 bg-white  text-violet-800 font-bold text-md uppercase rounded-lg  p-3 truncate"
                    >
                        Limpiar Campos
                    </button>

                    <button onClick={calcHectareas}>Hectáreas</button>
                    <button onClick={calcMetros}>Metros cuadrados</button>
                    <button onClick={calcFerrados}>Ferrados</button>

                   
                </div>
            </div>
            <div className="md:w-1/3">
                <div className="flex justify-end">
                    <button onClick={handleClickModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
                <div className="flex gap-2 mt-5">
                    <p className="mt-5 font-bold text-xl text-gray-800">Cantidad de {product.name_product} necesaria<br/> para esa extensión de terreno:<br/> <span id="calculo" className="text-lime-700 ">{quantity} litros. <br/>Equivalente a ml:  {quantity * 1000} ml</span></p>
                </div>
                <button
                    type="button"
                    className="bg-violet-800 hover:bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-900 via-violet-600 to-violet-900 text-white font-bold px-5 py-2 mt-5 uppercase rounded-lg"
                    onClick={() => {
                        handleAddOrder({...product, quantity})
                        handleClickModal()
                    }}
                >
                    Añadir al Tratamiento
                </button>
            </div>

            <div className="md:w-1/2">
                
                <div className="">
                    {product.technical_comments == "" ? (
                    <p className="text-xl">No hay comentarios del técnico.</p>
                    ) : (
                     <p className="text-xl mt-5"><span className=" font-bold text-xl text-gray-800">Comentarios del técnico: </span><br />{product.technical_comments}</p>
                    )}
                </div>

                <div className="">
                    {product.customer_comments == "" ? (
                    <p className="text-xl">No hay recordatorio para el cliente.</p>
                    ) : (
                     <p className="text-xl mt-5"><span className=" font-bold text-xl text-gray-800">Recordar al cliente: </span><br />{product.customer_comments}</p>
                    )}
                </div>

                <div className="">
                    {product.magrama_pdf == null ? (
                    <p className="text-xl">No hay ficha técnica.</p>
                    ) : (
                     <p className="text-xl mt-5"><span className=" font-bold text-xl text-gray-800">Ficha Magrama: </span>{product.magrama_pdf}</p>
                    )}
                </div>

                <div className="">
                    {product.application_instructions == "" ? (
                    <p className="text-center text-xl">No hay instrucciones de aplicación específicas.</p>
                    ) : (
                     <p className="text-xl mt-5"><span className=" font-bold text-xl text-gray-800">Aplicación: </span><br />{product.application_instructions}</p>
                    )}
                </div>

            </div>
        </div>
    );
}