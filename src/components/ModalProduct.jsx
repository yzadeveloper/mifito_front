import { useState } from "react";
import useFito from "../hooks/useFito";

export default function ModalProduct() {
    const { product, handleClickModal } = useFito();
    const [quantity, setQuantity] = useState(0);
    const [hectares, setHectares] = useState("");
    const [squareMeters, setSquareMeters] = useState("");
    const [ferrados, setFerrados] = useState("");

    // Función para calcular la cantidad necesaria de producto en base a la dosis y la extensión del terreno
    // const calculateQuantity = () => {
    //     let area;
    //     if (hectares !== "") {
    //         area = parseFloat(hectares); // 1 hectárea
    //     } else if (squareMeters !== "") {
    //         area = parseFloat(squareMeters) / 10000; // conversión a hectárea
    //     } else if (ferrados !== "") {
    //         area = parseFloat(ferrados) * 535; // 1 ferrado = 535 metros cuadrados
    //     } else {
    //         area = 0;
    //     }
    //     const productQuantity = (area * product.dose_ha) * 10;
    //     setQuantity(productQuantity);
    // };

    const calculateQuantity = () => {
        let productQuantity = 0;
        if (hectares !== "") {
            productQuantity = (parseFloat(hectares)) * product.dose_ha; // 1 hectárea
        } else if (squareMeters !== "") {
            productQuantity = (parseFloat(squareMeters) / 1000) * product.dose_ha; // conversión a hectárea
        } else if (ferrados !== "") {
            productQuantity = parseFloat(ferrados) * 535; // 1 ferrado = 535 metros cuadrados
        } else {
            productQuantity = 0;
        }
        
        setQuantity(productQuantity);
    };

    // Función para limpiar los otros campos cuando se escribe en uno
    const handleInputChange = (field, value) => {
        if (field === "hectares") {
            setSquareMeters("");
            setFerrados("");
        } else if (field === "squareMeters") {
            setHectares("");
            setFerrados("");
        } else if (field === "ferrados") {
            setHectares("");
            setSquareMeters("");
        }
        // Actualizar el valor del campo de entrada correspondiente
        switch (field) {
            case "hectares":
                setHectares(value);
                break;
            case "squareMeters":
                setSquareMeters(value);
                break;
            case "ferrados":
                setFerrados(value);
                break;
            default:
                break;
        }
        // Calcular la cantidad necesaria cuando se actualice un campo de entrada
        calculateQuantity();
    };

    const clearInputs = () => {
        setHectares("");
        setSquareMeters("");
        setFerrados("");
        setQuantity(0); // También debes reiniciar la cantidad al limpiar los campos
    };

    return (
        <div className="md:flex gap-10 mx-3 p-3">
            <div className="md:w-2/4">
                <h1 className="text-3xl font-bold mt-2">{product.name_product}</h1>
                <p className="mt-5 font-bold text-xl text-lime-800">Dosis general: {product.dose_ha} L/Ha</p>
                <p className="mt-2 font-bold text-s text-lime-800">Coste aproximado ml: {product.price_ml}€</p>
                <hr className="bg-lime-600 mt-2" />
                <p className="mt-5 font-bold text-xl text-lime-800">Rellena solo 1 campo:</p>
                <div className="flex gap-2 mt-2">
                    <div className="">
                        <label htmlFor="hectares" className="mt-5 font-bold text-s text-lime-800">Hectáreas:</label>
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
                        <label htmlFor="squareMeters" className="mt-5 font-bold text-s text-lime-800">Metros Cuadrados:</label>
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
                        <label htmlFor="ferrados" className="mt-5 font-bold text-s text-lime-800">Ferrados:</label>
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
                        className="bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1 rounded"
                    >
                        Limpiar Campos
                    </button>

                    
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
                    <p className="mt-5 font-bold text-xl text-lime-800">Cantidad de {product.name_product} necesaria<br/> para ese terreno:<br/> <span className="text-red-500">{quantity} litros</span></p>
                </div>
                <button
                    type="button"
                    className="bg-lime-600 hover:bg-lime-800 text-white font-bold px-5 py-2 mt-5 uppercase rounded"
                >
                    Añadir al Tratamiento
                </button>
            </div>

            <div className="md:w-1/2">
                
                <div className="">
                    {product.technical_comments == "" ? (
                    <p className="text-xl">No hay comentarios del técnico.</p>
                    ) : (
                     <p className="text-xl mt-5"><span className=" font-bold text-xl text-lime-800">Comentarios del técnico: </span><br />{product.technical_comments}</p>
                    )}
                </div>

                <div className="">
                    {product.customer_comments == "" ? (
                    <p className="text-xl">No hay recordatorio para el cliente.</p>
                    ) : (
                     <p className="text-xl mt-5"><span className=" font-bold text-xl text-lime-800">Recordar al cliente: </span><br />{product.customer_comments}</p>
                    )}
                </div>

                <div className="">
                    {product.magrama_pdf == null ? (
                    <p className="text-xl">No hay ficha técnica.</p>
                    ) : (
                     <p className="text-xl mt-5"><span className=" font-bold text-xl text-lime-800">Ficha Magrama: </span>{product.magrama_pdf}</p>
                    )}
                </div>

                <div className="">
                    {product.application_instructions == "" ? (
                    <p className="text-center text-xl">No hay instrucciones de aplicación específicas.</p>
                    ) : (
                     <p className="text-xl mt-5"><span className=" font-bold text-xl text-lime-800">Aplicación: </span><br />{product.application_instructions}</p>
                    )}
                </div>

            </div>
        </div>
    );
}
