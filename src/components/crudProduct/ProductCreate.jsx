

export default function ProductCreate() {
  return (
    <div className="mt-12">
      <form action="" className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-xl font-medium">Nombre Producto</label>
            <input type="text" name="" id=""
              className="border border-gray-300 text-gray-900 text-xl rounded-md w-full p-3" placeholder="Nombre de producto" />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-xl font-medium">Categoría</label>
            <input type="text" name="" id=""
              className="border border-gray-300 text-gray-900 text-xl rounded-md w-full p-3" placeholder="ej: herbicida..." />
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
          <button type="submit" className="px-4 py-2 bg-indigo-700 text-lg text-white font-bold uppercase rounded-md hover:bg-indigo-800 focus:ring-4 focus:ring-primary-200">
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}


