import { faTemperatureArrowUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
const URL = "http://localhost:3001/lessons";

const getAll = () => {
  return axios.get(URL);
};

const getSingle= (id)=>{
return axios.get(`${URL}/${id}`)
}

const addLesson = (data)=>{
return axios.post(URL,data)
}

const deleteLesson = (id) =>{
return axios.delete(`${URL}/${id}`)
}
const editLesson = (id, data)=>{
  return axios.patch(`${URL}/${id}`,data)
}


export default {
  getAll: getAll,
  getSingle:getSingle,
  addLesson:addLesson,
  deleteLesson:deleteLesson,
  editLesson:editLesson
};
