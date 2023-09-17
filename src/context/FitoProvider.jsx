import { createContext, useState } from "react"
import { categories as categoriesDB } from "../data/categories"

const FitoContext = createContext();


const FitoProvider = ({children}) => {

    const [categories, setCategories] = useState(categoriesDB);
    const [categoryActive, setcategoryActive] =useState(categories[0]);
    
    const handleClickCategory = id => {
        const category = categories.filter(category => category.id_category === id)[0]
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