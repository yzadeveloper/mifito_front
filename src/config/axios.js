import axios from "axios";

const callAxios =axios.create({
    URL: import.meta.env.VITE_API_URL,
})

export default callAxios