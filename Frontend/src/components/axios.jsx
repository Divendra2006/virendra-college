import axios from "axios"

const url = axios.create({
    baseURL : "https://virendra-college-1.onrender.com",
     withCredentials: true,
})

export default url;