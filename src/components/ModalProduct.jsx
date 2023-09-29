import { useState } from "react";
import useFito from "../hooks/useFito";

export default function ModalProduct() {
    const { product, handleClickModal, handleAddOrder } = useFito();
    const [quantity, setQuantity] = useState(0);
    const [hectares, setHectares] = useState("");
    const [squareMeters, setSquareMeters] = useState("");
    //console.log(squareMeters);
    const [ferrados, setFerrados] = useState("");
    

    
    const calculateQuantity = () => {
        let productQuantity = 0;
        
      
        // Utilizar Number() para convertir los valores en números
        const hectaresValue = hectares;
        
        const squareMetersValue = squareMeters / 10000;
        
        const ferradosValue = (ferrados * 535) /10000;
       
      
        if (hectaresValue !== 0) {
          productQuantity = hectaresValue * product.dose_ha;
        } else if (squareMetersValue !== 0) {
          productQuantity = squareMetersValue * product.dose_ha;
        } else if (ferradosValue !== 0) {
          productQuantity = ferradosValue * product.dose_ha;
        } else {
          productQuantity = 0;
        }

        
      
        setQuantity(productQuantity);
        
      };
      
      // Función para manejar cambios en los campos de entrada
      const handleInputChange = (field, value) => {
        // Actualizar el valor del campo de entrada correspondiente
        switch (field) {
          case "hectares":
            setHectares(value);
            setSquareMeters("");
            setFerrados("");
            break;
          case "squareMeters":
            setSquareMeters(value);
            setHectares("");
            setFerrados("");
            break;
          case "ferrados":
            setFerrados(value);
            setHectares("");
            setSquareMeters("");
            break;
            default:
            break;
         
        }
      
        // Calcular la cantidad necesaria cuando se actualice un campo de entrada
        calculateQuantity();
      };
      
      // Función para limpiar los campos y reiniciar la cantidad
      const clearInputs = () => {
        setHectares("");
        setSquareMeters("");
        setFerrados("");
        setQuantity(0);
      };
      
      

    return (
        <div className="md:flex gap-10 mx-3 p-3">
            <div className="md:w-2/4">
                <h1 className="text-3xl text-gray-700 font-bold mt-2">{product.name_product}</h1>
                <p className="mt-5 font-bold text-xl text-gray-800">Dosis general: {product.dose_ha} L/Ha</p>
                <p className="mt-2 font-bold text-s text-gray-800">Coste aproximado ml: {product.price_ml}€</p>
                <hr className="bg-gray-600 mt-2" />
                <p className="mt-5 font-bold text-xl text-gray-800">Rellena solo 1 campo:</p>
                <div className="flex gap-2 mt-2">
                    <div className="">
                        <label htmlFor="hectares" className="mt-5 font-bold text-s text-gray-800">Hectáreas:</label>
                        <input
                            className="mt-2 w-full p-2 bg-gray-200 border"
                            type="text"
                            id="hectares"
                            name="hectares"
                            value={hectares}
                            onChange={(e) => handleInputChange("hectares", e.target.value)}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="squareMeters" className="mt-5 font-bold text-s text-gray-800">Metros Cuadrados:</label>
                        <input
                            className="mt-2 w-full p-2 bg-gray-200 border"
                            type="text"
                            id="squareMeters"
                            name="squareMeters"
                            value={squareMeters}
                            onChange={(e) => handleInputChange("squareMeters", e.target.value)}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="ferrados" className="mt-5 font-bold text-s text-gray-800">Ferrados:</label>
                        <input
                            className="mt-2 w-full p-2 bg-gray-200 border"
                            type="text"
                            id="ferrados"
                            name="ferrados"
                            value={ferrados}
                            onChange={(e) => handleInputChange("ferrados", e.target.value)}
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

                    {/* <button
                        type="button"
                        onClick={setQuantity}
                        className="bg-indigo-400 hover:bg-red-600 text-white font-bold px-3 py-1 rounded mx-5"
                    >
                        Calcular
                    </button> */}
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
                    <p className="mt-5 font-bold text-xl text-gray-800">Cantidad de {product.name_product} necesaria<br/> para esa extensión de terreno:<br/> <span className="text-lime-700 ">{quantity} litros. <br/>Equivalente a ml:  {quantity * 1000} ml</span></p>
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