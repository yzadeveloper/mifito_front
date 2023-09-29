

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
              className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-900 via-violet-600 to-violet-900 text-white w-full mt-5 p-3 rounded-lg uppercase font-bold cursor-pointer"
              
          />

          <a href="#" className="text-blue-800">Recuperar contraseña</a>
        </form>

      </div>
  </>
  )
}
