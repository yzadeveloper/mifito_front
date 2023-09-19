import { createContext, useState } from "react"
import { toast } from "react-toastify";
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

    const handleAddOrder = ({id_category, dose_ha, price_ml, technical_comments, customer_comments, application_instructions, magrama_pdf, ecological, ...product}) => {
        console.log(product);
        setTreatment([...treatment, product])
        console.log(treatment);
        toast.success('Agregado al Tratamiento')
    }

    const handleDeleteProductTreatment = id => {
        const updateTreatment = treatment.filter(product => product.id_product !== id)
        setTreatment(updateTreatment)
        console.log(updateTreatment)
        toast.success('Eliminado del Tratamiento')
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
                treatment,
                handleAddOrder,
                handleDeleteProductTreatment
            }}
        >{children}</FitoContext.Provider>

    )
}
export {
    FitoProvider
}
export default FitoContext