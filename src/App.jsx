import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from './components/Inicio'
import Categoria from './components/Categoria'


function App() {
  

  return (
    <>
      <div className="contenedor">
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/categoria/:id' element={<Categoria></Categoria>}></Route>
          
        </Routes>
       
       </BrowserRouter>

        
      </div>
      
      
    </>
  )
}

export default App
