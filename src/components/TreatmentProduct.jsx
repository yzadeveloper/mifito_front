import useFito from "../hooks/useFito";


export default function TreatmentProduct({product}) {

    const {handleDeleteProductTreatment} = useFito();
    const {name_product, quantity} = product

    return (
      
      <>
        <div className="shadow space-y-1 p-4 bg-white">

            <div className="flex gap-2">
                    <p className="mt-5 font-bold text-xl text-gray-800"> {product.name_product} necesario<br/> 
                    <span id="calculo" className="text-lime-700 ">{quantity >= 1 ? (
                        <p className="text-xl mt-2">{quantity} L</p>
                        ) : (
                         <p className="text-xl mt-2">{quantity * 1000} ml</p>
                        )}</span></p>
              </div>

            <div className="flex justify-between gap-2 pb-4">
              <button
                type="button"
                className="bg-orange-400 p-2 text-white rounded-md font-bold uppercase shadow-md text-center"
                onClick={() => handleDeleteProductTreatment(product.id_product)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
            
        </div>
      </>
      );
}
