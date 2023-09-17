import { useEffect } from "react";
import { createContext, useState } from "react"

import axios from "axios";

const FitoContext = createContext();


const FitoProvider = ({children}) => {

    const [categories, setCategories] = useState([]);
    const [categoryActive, setcategoryActive] =useState({});

    const obtainCategories = async () => {
        try {
            
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/api/categories`)
            setCategories(data.data)
            setcategoryActive(data.data[0])
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        obtainCategories();
    }, [])
    
    const handleClickCategory = id_category => {
        const category = categories.filter(category => category.id_category === id_category)[0]
        setcategoryActive(category)
    }
   
    return (
        <FitoContext.Provider
            value={{
                categories,
                categoryActive,
                handleClickCategory
            }}
        >{children}</FitoContext.Provider>

    )
}
export {
    FitoProvider
}
export default FitoContext