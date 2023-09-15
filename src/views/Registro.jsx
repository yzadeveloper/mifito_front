

export default function Registro() {
  return (
    <>
      <h1 className="text-4xl font-bold ">Crear nuevo usuario</h1>
      <p>Rellena el formulario con los datos</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10 ">
        <form action="">

          <div className="mb-4">
            <label 
                  className="text-slate-800 " 
                  htmlFor="user_name">
              Nombre y apellidos:
            </label>
            <input 
                  type="text" 
                  id="user_name" 
                  className="mt-2 w-full p-3 bg-gray-100 "
                  name="user_name"
                  placeholder="Escribe el nombre completo"
            />
          </div>

          <div className="mb-4">
            <label 
                  className="text-slate-800 " 
                  htmlFor="email">
              Correo electrónico:
            </label>
            <input 
                  type="email" 
                  id="email" 
                  className="mt-2 w-full p-3 bg-gray-100 "
                  name="email"
                  placeholder="Escribe el email"
            />
          </div>

          <div className="mb-4">
            <label 
                  className="text-slate-800 " 
                  htmlFor="password">
              Contraseña:
            </label>
            <input 
                  type="password" 
                  id="password" 
                  className="mt-2 w-full p-3 bg-gray-100 "
                  name="password"
                  placeholder="Escribe la contraseña"
            />
          </div>

          <div className="mb-4">
            <label 
                  className="text-slate-800 " 
                  htmlFor="password_confirmation">
              Repite la contraseña:
            </label>
            <input 
                  type="password" 
                  id="password_confirmation" 
                  className="mt-2 w-full p-3 bg-gray-100 "
                  name="password_confirmation"
                  placeholder="Repite la contraseña"
            />
          </div>

          <input 
              type="submit"
              value="Crear Cuenta"
              className="bg-lime-600 hover:bg-lime-800 text-white w-full mt-5 p-3 rounded-sm
              uppercase font-bold cursor-pointer " 
          />
        </form>

      </div>
    </>
  )
}
