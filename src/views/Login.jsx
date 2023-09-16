

export default function Login() {
  return (
    <>
      <h1 className="text-4xl font-bold ">Iniciar sesión</h1>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10 ">
        <form action="">

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

          <input 
              type="submit"
              value="Entrar"
              className="bg-lime-600 hover:bg-lime-800 text-white w-full mt-5 p-3 rounded-sm
              uppercase font-bold cursor-pointer " 
          />
        </form>

      </div>
  </>
  )
}
