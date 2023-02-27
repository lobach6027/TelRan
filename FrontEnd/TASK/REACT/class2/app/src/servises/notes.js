import axios from "axios";

const URL = 'http://localhost:3001/notes'

const getAll = () =>{
    const request = axios.get(URL)
    return request
    .then(res=>res)
    .catch(err=>console.log(err))
}
const getSingle = (id)=>{
    return axios.get(`${URL}/${id}`);
}
const add = (data)=>{
    return axios.post(URL, data);
}
const deleteSingle = (id)=>{
    return axios.delete(`${URL}/${id}`);
}
export default{
    getAll: getAll,
    getSingle:getSingle,
    add:add,
    deleteSingle: deleteSingle
}
