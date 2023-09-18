import { createContext, useState } from "react"
import { categories as categoriesDB } from "../data/categories"

const FitoContext = createContext();


const FitoProvider = ({children}) => {

    const [categories, setCategories] = useState(categoriesDB)
    const [categoryActive, setcategoryActive] = useState(categories[0])
    const [modal, setModal] = useState(false)
    const [product, setProduct] = useState({})
    const [treatment, setTreatment] = useState([])
    
    const handleClickCategory = id => {
        const category = categories.filter(category => category.id_category === id)[0]
        setcategoryActive(category)
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProduct = product => {
        setProduct(product)
    }
   
    return (
        <FitoContext.Provider
            value={{
                categories,
                categoryActive,
                handleClickCategory,
                modal,
                handleClickModal,
                product,
                handleSetProduct,
                treatment
            }}
        >{children}</FitoContext.Provider>

    )
}
export {
    FitoProvider
}
export default FitoContext