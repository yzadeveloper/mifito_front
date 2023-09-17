import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { FitoProvider } from './context/FitoProvider'
import router from './router'
import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FitoProvider>
        <RouterProvider router={router} />
    </FitoProvider>
  </React.StrictMode>,
)
