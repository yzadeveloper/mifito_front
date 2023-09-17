import { Outlet } from "react-router"
import Sidebar from "../components/sidebar"
import Summary from "../components/summary"

export default function Layout() {
  return (
    <div className="md:flex">
        <Sidebar />

        <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
        <Outlet />
        </main>

        

        <Summary />
        
    </div>
  )
}

