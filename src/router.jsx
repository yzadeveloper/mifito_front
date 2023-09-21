import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import AuthLayout from './layouts/AuthLayout'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Registro from './views/Registro'
import ProductIndex from './components/crudProduct/ProductIndex'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Inicio />
            }

           
        ]
    },

    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },

            {
                path: '/auth/registro',
                element: <Registro />
            }

            
        ]
    },

    {
        path: '/productos',
        element: <ProductIndex />
    }

])

export default router