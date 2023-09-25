import useFito from "../hooks/useFito"

export default function Product(product) {

    const { handleClickModal, handleSetProduct } = useFito();
    const {name_product, dose_ha} = product

  return (
    <div className="border rounded-md p-3 shadow bg-white">
        <div>
            <h3 className="text-2xl font-bold text-gray-700">{name_product}</h3>
            <p className="mt-5 font-bold text-xl text-gray-700">Dosis general: {dose_ha} L/Ha</p>
            
            <button type="button" className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-900 via-violet-600 to-violet-900 hover:bg-violet-800 text-white mt-5 p-3 uppercase font-bold rounded-md"
              onClick={() => {
                handleClickModal();
                handleSetProduct(product);
                console.log(product)
              }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calculator " width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
                  <path d="M8 14l0 .01" />
                  <path d="M12 14l0 .01" />
                  <path d="M16 14l0 .01" />
                  <path d="M8 17l0 .01" />
                  <path d="M12 17l0 .01" />
                  <path d="M16 17l0 .01" />
                </svg>
                

            </button>
        </div>
        
    </div>
  )
}
