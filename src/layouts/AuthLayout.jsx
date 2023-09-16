import { Outlet } from "react-router"


export default function AuthLayout() {
  return (
    <main className="max-w-4xl m-auto mt-10 md:mt-28 flex-col md:flex-row items-center">
       <img className="max-w-xs" src="../img/mifito_logo.png" alt="mifito_logo" />

       <div className="p-10 w-full">
          <Outlet />
      </div>
        
    </main>
  )
}
