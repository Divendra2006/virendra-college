import axios from "axios"

const url = axios.create({
    baseURL : "https://virendra-college.onrender.com",
    withCredentials:true
})

export default url;