import axios from "axios"

const url = axios.create({
    baseURL : "https://virendra-college-backend.onrender.com",
    withCredentials:true
})

export default url;