import { Outlet } from "react-router"
import Modal from "react-modal"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/sidebar"
import Summary from "../components/summary"
import ModalProduct from "../components/ModalProduct"
import useFito from "../hooks/useFito"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%",
  },
};

Modal.setAppElement('#root')

export default function Layout() {

  const { modal } = useFito();
 

  return (
    <>
      <div className="md:flex">
          <Sidebar />

          <main className="flex-1 h-screen overflow-y-scroll  p-3 bg-gray-200">
          <Outlet />
          </main>

          <Summary />
      </div>
     
      <Modal isOpen={modal} style={customStyles}>
          <ModalProduct />
      </Modal>

      <ToastContainer />
     
    </>
  )
}

