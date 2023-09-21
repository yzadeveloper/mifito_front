import axios from "axios";

const todasCategorias = async (state) => {
    const peticion = await axios.get('http://localhost:8000/api/categories')
    state(peticion.data)

}

const unicaCategoria = async (id, state) => {
    const peticion = await axios.get(`http://localhost:8000/api/category/${id}`)
    state(peticion.data)
}

const todosProductos = async (state) => {
    const peticion = await axios.get('http://localhost:8000/api/products')
    state(peticion.data)

}
export {
    todasCategorias,
    unicaCategoria,
    todosProductos

}

