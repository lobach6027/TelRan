import axios from "axios";
const URL = "http://localhost:3001/register"

const register = (user)=>{
    return axios.post(URL,user)
}

const login = (user)=>{
return axios.post("http://localhost:3001/login",user)
}
export default {
    register:register,
    login:login
}