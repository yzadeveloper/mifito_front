import { useContext } from "react";
import FitoContext from "../context/FitoProvider";

const useFito = () => {
    return useContext(FitoContext)
}

export default useFito