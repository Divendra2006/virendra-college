import axios from "axios"

const url = axios.create({
    baseURL : "http://localhost:8000",
    withCredentials:true
})

export default url;