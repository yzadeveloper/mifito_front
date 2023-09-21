import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from './components/Inicio'
import Categoria from './components/Categoria'
import TableProducts from "./components/Tableproducts"


function App() {
  

  return (
    <>
      <div className="contenedor">
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/categoria/:id' element={<Categoria></Categoria>}></Route>
          <Route path='/products' element={<TableProducts></TableProducts>}></Route>
          
        </Routes>
       
       </BrowserRouter>

        
      </div>
      
      
    </>
  )
}

export default App
